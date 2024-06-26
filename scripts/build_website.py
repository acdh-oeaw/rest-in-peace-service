import glob
import jinja2
import os
import json

templateLoader = jinja2.FileSystemLoader(
    searchpath=[
        "./scripts/templates/",
    ]
)
templateEnv = jinja2.Environment(loader=templateLoader)
detail_view_template = templateEnv.get_template("detail_view.j2")
index_template = templateEnv.get_template("index.j2")

print("hello, let's start building")

for x in glob.glob("./html/*.html"):
    os.unlink(x)

files = glob.glob("./data/*.json")
toc_data = []
print("building static content")
for x in files:
    _, tail = os.path.split(x)
    new_name = tail.replace(".json", ".html")
    print(x, new_name)
    with open(x, "r") as f:
        data = json.load(f)
    with open(f"./html/{new_name}", "w") as f:
        f.write(detail_view_template.render(data))
    toc_data.append(
        {
            "title_short": data.get("title_short", "no title provided"),
            "url": new_name,
            "img": data.get("img", False),
        }
    )

with open("./html/index.html", "w") as f:
    f.write(index_template.render({"toc_data": toc_data}))

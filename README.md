# Monaka按钮（BETA）

# 这是Monaka按钮的测试版站点，正式版正在制作中

## 添加剪辑

1. Fork这个仓库
2. 将你Fork的仓库克隆到本地，在本地进行修改
3. 将音频添加到 `./data/res` 文件夹下
4. 修改 `./data/reslist.json` 文件
5. 将修改 `push` 至你Fork的仓库中
6. 提交 `Pull Request` 至本仓库

`./data/reslist.json` 文件的格式：
``` json
[
    {
        "title": "分类名称1",
        "content": [
            "音频文件的文件名1",
            "音频文件的文件名2"
        ]
    },
    {
        "title": "分类名称2",
        "content": [
            "音频文件的文件名3",
            "音频文件的文件名4"
        ]
    }
]
```
请注意：
* 音频文件必须为 `mp3` 格式，文件后缀为 `.mp3`
* 最终展示出来的按钮上的文字，与文件名、`json` 文件中的名字是一致的
* 不要留有 `content` 为空的分类
* 请注意 `JSON` 文件的格式，不了解 `JSON` 格式的请阅读 [菜鸟教程上的`JSON`教程](https://www.runoob.com/json/json-tutorial.html)
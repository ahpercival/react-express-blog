import express from "express";
import cors from "cors";

const app = express();

const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis. Quis ipsum suspendisse ultrices gravida dictum fusce. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Neque volutpat ac tincidunt vitae semper quis lectus. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Condimentum mattis pellentesque id nibh tortor id aliquet. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Lacus viverra vitae congue eu consequat ac felis donec et. Pellentesque habitant morbi tristique senectus. Neque vitae tempus quam pellentesque nec nam aliquam sem. Consequat nisl vel pretium lectus. Consectetur libero id faucibus nisl tincidunt eget nullam non. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque adipiscing commodo elit at. Morbi tristique senectus et netus. Et magnis dis parturient montes nascetur ridiculus. Purus viverra accumsan in nisl.<br/><br/>Proin nibh nisl condimentum id venenatis a condimentum vitae. Morbi tristique senectus et netus et malesuada fames. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. In massa tempor nec feugiat nisl pretium. Volutpat ac tincidunt vitae semper quis lectus nulla at. Nec ultrices dui sapien eget. Blandit aliquam etiam erat velit scelerisque. Facilisi etiam dignissim diam quis. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Quisque id diam vel quam elementum pulvinar etiam non. Id diam vel quam elementum pulvinar etiam. A diam sollicitudin tempor id eu. Nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Accumsan lacus vel facilisis volutpat est velit egestas. Dapibus ultrices in iaculis nunc sed augue. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Vitae et leo duis ut diam quam nulla porttitor.<br/><br/>Eu lobortis elementum nibh tellus molestie nunc. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Dui ut ornare lectus sit amet est placerat. In ante metus dictum at tempor commodo ullamcorper a lacus. Viverra accumsan in nisl nisi scelerisque. Neque convallis a cras semper auctor neque. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Mi tempus imperdiet nulla malesuada. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quam nulla porttitor massa id neque aliquam vestibulum. Massa tincidunt dui ut ornare lectus sit. Dictum fusce ut placerat orci nulla. Gravida cum sociis natoque penatibus et magnis dis.<br/><br/>Adipiscing tristique risus nec feugiat in fermentum posuere urna. Arcu cursus euismod quis viverra. Volutpat consequat mauris nunc congue nisi. Augue ut lectus arcu bibendum at varius vel. Auctor elit sed vulputate mi sit amet. Amet risus nullam eget felis eget nunc. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Adipiscing diam donec adipiscing tristique risus.Lobortis feugiat vivamus at augue eget arcu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Massa enim nec dui nunc mattis enim. Vitae et leo duis ut diam quam nulla porttitor. Lectus nulla at volutpat diam ut venenatis tellus. Faucibus interdum posuere lorem ipsum dolor sit amet.Eu sem integer vitae justo eget magna fermentum iaculis. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh.<br/><br/>Ultrices vitae auctor eu augue ut lectus arcu bibendum. Aliquet lectus proin nibh nisl condimentum id. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Vel risus commodo viverra maecenas. Elit ut aliquam purus sit amet luctus venenatis lectus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. In cursus turpis massa tincidunt dui ut ornare lectus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eu tincidunt tortor aliquam nulla facilisi cras. Fames ac turpis egestas sed. Lacus luctus accumsan tortor posuere. Convallis tellus id interdum velit laoreet id donec ultrices. Ut enim blandit volutpat maecenas volutpat."

app.use(cors());

app.get("/api/v1/articles", (req, res) => {
  const articles = [
    {
      id: 1,
      slug: "article-1",
      title: "Article 1",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    },
    {
      id: 2,
      slug: "article-2",
      title: "Article 2",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    },
    {
      id: 3,
      slug: "article-3",
      title: "Article 3",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
    },
    {
      id: 4,
      slug: "article-4",
      title: "Article 4",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    },
    {
      id: 5,
      slug: "article-5",
      title: "Article 5",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o",
    },
    {
      id: 6,
      slug: "article-6",
      title: "Article 6",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    },
    {
      id: 7,
      slug: "article-7",
      title: "Article 7",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    },
    {
      id: 8,
      slug: "article-8",
      title: "Article 8",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
    },
    {
      id: 9,
      slug: "article-9",
      title: "Article 9",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
    },
    {
      id: 10,
      slug: "article-10",
      title: "Article 10",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
    },
    {
      id: 11,
      slug: "article-11",
      title: "Article 11",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
    },
    {
      id: 12,
      slug: "article-12",
      title: "Article 12",
      date: "25/07/2023",
      summary,
      content,
      image:
        "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    },
  ];

  return res.status(200).json({ articles });
});

app.listen(5001, () => {
  console.log("app listening on port 5001");
});

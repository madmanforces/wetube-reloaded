//질문하기 req,res 원래는 이거잖슴 근데 이게 왜 바뀌지?//

export const trending = (req, res) =>{
 const videos = [
     {
         title: "First Video",
         rating:5,
         comments:2,
         createdAt: "2 minutes ago",
         views: 59,
         id:1
     },
     {
        title: "Second Video",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views: 59,
        id:2
    },
    {
        title: "Third Video",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views: 59,
        id:3
    },
 ];
 res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");

export const edit = (req,res) =>res.send("edit");

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const deletevideo = (req, res) => res.send("Delete Video");






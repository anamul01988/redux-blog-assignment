const initialState = [
    {
        id: 1,
        img:"https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        category:"Blog",
        title:"Boost your Convention rate",
        author_img:"https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        author_title:"Anamu Haque",
        author_td:"11 Jul 2022",
        author_time:"5 min read"
        // text: "Learn React JS",
        // completed: true,
    },
    {
        id: 2,
        img:"https://images.unsplash.com/photo-1546177461-68622f53ed0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTM3Mjg3MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        category:"Article",
        title:"Boost your Convention rate",
        author_img:"https://images.unsplash.com/photo-1543132220-3ec99c6094dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTM3MzQwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        author_title:"Akrmul Haque",
        author_td:"11 Jul 2022",
        author_time:"5 min read"
        // text: "Learn React JS",
        // completed: true, //special day, public event, politics, sport, celibrity news, special
    },
    {
        id: 3,
        img:"https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzM2MDgyNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        category:"Advertisement",
        title:"Boost your Convention rate",
        author_img:"https://images.unsplash.com/photo-1558203728-00f45181dd84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzcxNzUyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        author_title:"Saja Haque",
        author_td:"11 Jul 2022",
        author_time:"5 min read"
      
    },
    {
        id: 4,
        img:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        category:"Advertisement",
        title:"The ream man joy the rate",
        author_img:"https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjYzNDg2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        author_title:"Rubina Roy",
        author_td:"11 Jul 2022",
        author_time:"5 min read"
      
    },
    {
        id: 5,
        img:"https://images.unsplash.com/photo-1513542992587-cd39ba97057c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTM3MzE0NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        category:"Journal",
        title:"The ream man joy the rate",
        author_img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        author_title:"Jackson Jesoy",
        author_td:"11 Jul 2022",
        author_time:"5 min read"
      
    },
    {
        id: 6,
        img:"https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzM2MDgyNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        // category :{
        //     first1: "Journal",
        //     second2:"Politics"
        // },
        category :"Politics",
        // {
        //     first1: "Journal",
        //     second2:"Politics"
        // },
        title:"Best Bangladeshi Politics Juournal",
        author_img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        author_title:"Jackson Jesoy",
        author_td:"16 Jul 2020",
        author_time:"10 min read"
      
    },
   
    
];

export default initialState;
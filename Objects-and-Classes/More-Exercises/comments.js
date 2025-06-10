function solve(input) {
    const users = [];
    const articles = [];

    const addUserCommand = 'user';
    const addArticleCommand = 'article';
    const postCommentCommand = 'posts on';

    const dataList = [];

    for (const info of input) {
        if (info.includes(addUserCommand)) {
            const username = info.substring(addUserCommand.length + 1);
            users.push(username);

        } else if (info.includes(addArticleCommand)) {
            const articleName = info.substring(addArticleCommand.length + 1);
            articles.push(articleName);

        } else if (info.includes(postCommentCommand)) {
            const [userInfo, commentInfo] = info.split(': ');
            const [username, articleName] = userInfo.split(` ${postCommentCommand} `);
            
            if (!users.includes(username) || !articles.includes(articleName)) {
                continue;
            }
            const [commentTitle, commentContent] = commentInfo.split(', ');
            postComment(username, articleName, commentTitle, commentContent, dataList);
        }
    }

    const sortedDataList = sortData(dataList);
    printData(sortedDataList);


    function printData(dataList) {
        dataList.forEach(data => {
            const articleName = Object.getOwnPropertyNames(data);
            console.log(`Comments on ${articleName}`);
            
            const users = data[articleName];
            users.forEach(user => {
                const username = Object.getOwnPropertyNames(user);
                const {commentTitle, commentContent} = user[username];

                console.log(`--- From user ${username}: ${commentTitle} - ${commentContent}`);
            });
        });
    }

    function sortData(dataList) {
        const sortedDataList = dataList.toSorted((a, b) => {
            const articleOne = Object.getOwnPropertyNames(a);
            const articleTwo = Object.getOwnPropertyNames(b);

            return b[articleTwo].length - a[articleOne].length;
        });

        sortedDataList.forEach(data => {
            const articleName = Object.getOwnPropertyNames(data);
            const users = data[articleName];
            users.sort((a, b) => {
                const usernameOne = Object.getOwnPropertyNames(a)[0];
                const usernameTwo = Object.getOwnPropertyNames(b)[0];

                return usernameOne.localeCompare(usernameTwo);
            })
        })

        return sortedDataList;
    }

    function postComment(username, articleName, commentTitle, commentContent, dataList) {
        const article = findArticle(articleName, dataList);
        const comment = {
            [username]: {commentTitle, commentContent,}
        };
        
        if (!article) {
            const data = {
                [articleName]: [comment]
            };
            dataList.push(data);   
            
        } else {
            article[articleName].push(comment);
        }
    }

    function findArticle(articleName, dataList) {
        return dataList.find(data => data.hasOwnProperty(articleName));
    }
}


solve(
    [
        'user aUser123',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user uSeR4',
        'user lastUser',
        'uSeR4 posts on Books: I like books, I do really like them', 
        'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much'
    ]
);

console.log('');

solve(
    [
        'user Mark',
        'Mark posts on someArticle: NoTitle, stupidComment',
        'article Bobby',
        'article Steven',
        'user Liam',
        'user Henry',
        'Mark posts on Bobby: Is, I do really like them',
        'Mark posts on Steven: title, Run',
        'someUser posts on Movies: Like'
    ]
);

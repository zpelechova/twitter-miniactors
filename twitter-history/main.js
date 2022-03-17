import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    const {userNames, newerThan, olderThan} = input;
    console.log(userNames);
    console.log(newerThan);
        console.log(olderThan);

    const startUrls = [];
    for (const userName of userNames) {
        const url = `https://twitter.com/search?q=(from%3A${userName})%20until%3A${olderThan}%20since%3A${newerThan}&src=typed_query&f=live`;
        startUrls.push( { "url" : url } );
    }
    console.log(startUrls);


        
    await Apify.metamorph('vdrmota/twitter-scraper', {
        ...input,
        startUrls: startUrls,
        mode: "replies",
        maxIdleTimeoutSecs: 60,
    });
});
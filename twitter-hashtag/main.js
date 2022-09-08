import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    const {hashtags} = input;
    console.log(`The actor is going to get tweets containing these hashtags: ${hashtags}`);

    const startUrls = [];
    for (const hashtag of hashtags) {
        const url = `https://twitter.com/hashtag/${hashtag.replace("#", "")}`;
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

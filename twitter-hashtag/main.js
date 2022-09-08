import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    const {hashtags, newerThan, olderThan} = input;
    console.log(`The actor is going to get tweets containing these hashtags: ${hashtags}`);
    console.log(`Newer then ${newerThan}, and older then ${olderThan}`);

    const startUrls = [];
    for (const hashtag of hashtags) {
        const url = `https://twitter.com/search?q=(%23${hashtag.replace("#", "")})%20until%3A${olderThan}%20since%3A${newerThan}&src=typed_query&f=live`;
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
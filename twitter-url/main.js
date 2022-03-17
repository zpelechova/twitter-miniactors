import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
        
    await Apify.metamorph('vdrmota/twitter-scraper', {
        ...input,
        mode: "replies",
        maxIdleTimeoutSecs: 60,
    });
});
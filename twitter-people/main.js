import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('vdrmota/twitter-scraper', {
        ...input,
        searchMode: "user",
        mode: "own",
        tweetsDesired: 1,
        addUserInfo: true,
        maxIdleTimeoutSecs: 60,
    });
});
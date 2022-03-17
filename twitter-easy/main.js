import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('vdrmota/twitter-scraper', {
        ...input,
        searchMode: "",
        mode: "own",
        maxIdleTimeoutSecs: 60,
    });
});
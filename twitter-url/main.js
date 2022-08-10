import { Actor } from 'apify';

Actor.main(async () => {
    const input = await Actor.getInput();
        
    await Actor.metamorph('vdrmota/twitter-scraper', {
        ...input,
        mode: "replies",
        maxIdleTimeoutSecs: 60,
    });
});

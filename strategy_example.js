
const parsePttPosts = (pttPosts) => { return ... posts };
const parseDcardPosts = (DcardPosts) => { return ... posts };

const toPosts = curry(
    (parseStrategy, anyPosts) => parseStrategy(anyPosts)
);

const fromPtt = toPosts(parsePttPosts);
const fromDcard = toPosts(parseDcardPosts);

Telnet.get.find.id('M.1624114327.A.107').then(fromPtt);
HttpClient.get.find.id(233319499).then(fromDcard);



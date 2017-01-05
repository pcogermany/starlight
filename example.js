/** middlewares **/
/*
timeout.unless = unless;
app.use(timeout('30s'));

helmet.unless = unless;
app.use(helmet());

compression.unless = unless;
app.use(compression());

cookieParser.unless = unless;
app.use(cookieParser());

bodyParser.urlencoded.unless = unless;
app.use(bodyParser.urlencoded({ extended: true }));

bodyParser.json.unless = unless;
app.use(bodyParser.json());

limes.verifyTokenMiddlewareExpress.unless = unless;
app.use(limes.verifyTokenMiddlewareExpress({
  payloadWhenAnonymous: {
    foo: 'bar',
  },
}));

if (fs.existsSync(`${__dirname}/public/favicon.ico`)) { // sync version not deprecated
  favicon.unless = unless;
  app.use(favicon(`${__dirname}/public/favicon.ico`));
}

express.static.unless = unless;
app.use(express.static('public'));

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(500).send('Something broke!');
});
*/
/** middlewares **/

/** routes **/
app.get('/', (req, res) => {
  res.send('Hello World!');
});
/** routes **/

app.listen(3000, () => {
  debug('Example app listening on port 3000!');
});

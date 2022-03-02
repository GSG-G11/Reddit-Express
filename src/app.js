const router = require('./routes/route');
const {
  express,
  path,
  clientError,
  serverError,
} = require('./index');

const app = express();
const filePath = path.join(__dirname, '..', '..', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(filePath));
app.use(router);

app.set('port', process.env.PORT || 8000);

router.use(clientError);
router.use(serverError);

module.exports = app;

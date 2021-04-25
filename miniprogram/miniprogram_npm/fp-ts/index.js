module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1619349411467, function(require, module, exports) {

/**
 * @since 2.0.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.magma = exports.lattice = exports.json = exports.joinSemilattice = exports.ioRef = exports.ioEither = exports.io = exports.invariant = exports.identity = exports.hkt = exports.heytingAlgebra = exports.group = exports.functorWithIndex = exports.functor = exports.function = exports.fromTask = exports.fromIO = exports.fromEither = exports.foldableWithIndex = exports.foldable = exports.filterableWithIndex = exports.filterable = exports.field = exports.extend = exports.eitherT = exports.either = exports.distributiveLattice = exports.date = exports.contravariant = exports.const = exports.console = exports.compactable = exports.comonad = exports.choice = exports.chainRec = exports.chain = exports.category = exports.boundedMeetSemilattice = exports.boundedLattice = exports.boundedJoinSemilattice = exports.boundedDistributiveLattice = exports.bounded = exports.booleanAlgebra = exports.boolean = exports.bifunctor = exports.array = exports.apply = exports.applicative = exports.alternative = exports.alt = void 0;
exports.theseT = exports.these = exports.taskThese = exports.taskOption = exports.taskEither = exports.task = exports.strong = exports.string = exports.store = exports.stateT = exports.stateReaderTaskEither = exports.state = exports.show = exports.eq = exports.set = exports.separated = exports.semiring = exports.semigroupoid = exports.semigroup = exports.ring = exports.record = exports.readerTask = exports.readonlyTuple = exports.readonlySet = exports.readonlyRecord = exports.readonlyNonEmptyArray = exports.readonlyMap = exports.readonlyArray = exports.readerTaskEither = exports.readerT = exports.readerEither = exports.reader = exports.random = exports.profunctor = exports.pointed = exports.pipeable = exports.ordering = exports.ord = exports.optionT = exports.option = exports.struct = exports.number = exports.nonEmptyArray = exports.monoid = exports.monadThrow = exports.monadTask = exports.monadIO = exports.monad = exports.meetSemilattice = exports.map = void 0;
exports.writerT = exports.writer = exports.witherable = exports.validationT = exports.unfoldable = exports.tuple = exports.tree = exports.traversableWithIndex = exports.traversable = exports.traced = void 0;
var alt = __importStar(require("./Alt"));
exports.alt = alt;
var alternative = __importStar(require("./Alternative"));
exports.alternative = alternative;
var applicative = __importStar(require("./Applicative"));
exports.applicative = applicative;
var apply = __importStar(require("./Apply"));
exports.apply = apply;
var array = __importStar(require("./Array"));
exports.array = array;
var bifunctor = __importStar(require("./Bifunctor"));
exports.bifunctor = bifunctor;
var boolean = __importStar(require("./boolean"));
exports.boolean = boolean;
var booleanAlgebra = __importStar(require("./BooleanAlgebra"));
exports.booleanAlgebra = booleanAlgebra;
var bounded = __importStar(require("./Bounded"));
exports.bounded = bounded;
var boundedDistributiveLattice = __importStar(require("./BoundedDistributiveLattice"));
exports.boundedDistributiveLattice = boundedDistributiveLattice;
var boundedJoinSemilattice = __importStar(require("./BoundedJoinSemilattice"));
exports.boundedJoinSemilattice = boundedJoinSemilattice;
var boundedLattice = __importStar(require("./BoundedLattice"));
exports.boundedLattice = boundedLattice;
var boundedMeetSemilattice = __importStar(require("./BoundedMeetSemilattice"));
exports.boundedMeetSemilattice = boundedMeetSemilattice;
var category = __importStar(require("./Category"));
exports.category = category;
var chain = __importStar(require("./Chain"));
exports.chain = chain;
var chainRec = __importStar(require("./ChainRec"));
exports.chainRec = chainRec;
var choice = __importStar(require("./Choice"));
exports.choice = choice;
var comonad = __importStar(require("./Comonad"));
exports.comonad = comonad;
var compactable = __importStar(require("./Compactable"));
exports.compactable = compactable;
var console = __importStar(require("./Console"));
exports.console = console;
var const_ = __importStar(require("./Const"));
exports.const = const_;
var contravariant = __importStar(require("./Contravariant"));
exports.contravariant = contravariant;
var date = __importStar(require("./Date"));
exports.date = date;
var distributiveLattice = __importStar(require("./DistributiveLattice"));
exports.distributiveLattice = distributiveLattice;
var either = __importStar(require("./Either"));
exports.either = either;
var eitherT = __importStar(require("./EitherT"));
exports.eitherT = eitherT;
var eq = __importStar(require("./Eq"));
exports.eq = eq;
var extend = __importStar(require("./Extend"));
exports.extend = extend;
var field = __importStar(require("./Field"));
exports.field = field;
var filterable = __importStar(require("./Filterable"));
exports.filterable = filterable;
var filterableWithIndex = __importStar(require("./FilterableWithIndex"));
exports.filterableWithIndex = filterableWithIndex;
var foldable = __importStar(require("./Foldable"));
exports.foldable = foldable;
var foldableWithIndex = __importStar(require("./FoldableWithIndex"));
exports.foldableWithIndex = foldableWithIndex;
var fromEither = __importStar(require("./FromEither"));
exports.fromEither = fromEither;
var fromIO = __importStar(require("./FromIO"));
exports.fromIO = fromIO;
var fromTask = __importStar(require("./FromTask"));
exports.fromTask = fromTask;
var function_ = __importStar(require("./function"));
exports.function = function_;
var functor = __importStar(require("./Functor"));
exports.functor = functor;
var functorWithIndex = __importStar(require("./FunctorWithIndex"));
exports.functorWithIndex = functorWithIndex;
var group = __importStar(require("./Group"));
exports.group = group;
var heytingAlgebra = __importStar(require("./HeytingAlgebra"));
exports.heytingAlgebra = heytingAlgebra;
var hkt = __importStar(require("./HKT"));
exports.hkt = hkt;
var identity = __importStar(require("./Identity"));
exports.identity = identity;
var invariant = __importStar(require("./Invariant"));
exports.invariant = invariant;
var io = __importStar(require("./IO"));
exports.io = io;
var ioEither = __importStar(require("./IOEither"));
exports.ioEither = ioEither;
var ioRef = __importStar(require("./IORef"));
exports.ioRef = ioRef;
var joinSemilattice = __importStar(require("./JoinSemilattice"));
exports.joinSemilattice = joinSemilattice;
var json = __importStar(require("./Json"));
exports.json = json;
var lattice = __importStar(require("./Lattice"));
exports.lattice = lattice;
var magma = __importStar(require("./Magma"));
exports.magma = magma;
var map = __importStar(require("./Map"));
exports.map = map;
var meetSemilattice = __importStar(require("./MeetSemilattice"));
exports.meetSemilattice = meetSemilattice;
var monad = __importStar(require("./Monad"));
exports.monad = monad;
var monadIO = __importStar(require("./MonadIO"));
exports.monadIO = monadIO;
var monadTask = __importStar(require("./MonadTask"));
exports.monadTask = monadTask;
var monadThrow = __importStar(require("./MonadThrow"));
exports.monadThrow = monadThrow;
var monoid = __importStar(require("./Monoid"));
exports.monoid = monoid;
var nonEmptyArray = __importStar(require("./NonEmptyArray"));
exports.nonEmptyArray = nonEmptyArray;
var number = __importStar(require("./number"));
exports.number = number;
var option = __importStar(require("./Option"));
exports.option = option;
var optionT = __importStar(require("./OptionT"));
exports.optionT = optionT;
var ord = __importStar(require("./Ord"));
exports.ord = ord;
var ordering = __importStar(require("./Ordering"));
exports.ordering = ordering;
var pipeable = __importStar(require("./pipeable"));
exports.pipeable = pipeable;
var pointed = __importStar(require("./Pointed"));
exports.pointed = pointed;
var profunctor = __importStar(require("./Profunctor"));
exports.profunctor = profunctor;
var random = __importStar(require("./Random"));
exports.random = random;
var reader = __importStar(require("./Reader"));
exports.reader = reader;
var readerEither = __importStar(require("./ReaderEither"));
exports.readerEither = readerEither;
var readerT = __importStar(require("./ReaderT"));
exports.readerT = readerT;
var readerTask = __importStar(require("./ReaderTask"));
exports.readerTask = readerTask;
var readerTaskEither = __importStar(require("./ReaderTaskEither"));
exports.readerTaskEither = readerTaskEither;
var readonlyArray = __importStar(require("./ReadonlyArray"));
exports.readonlyArray = readonlyArray;
var readonlyMap = __importStar(require("./ReadonlyMap"));
exports.readonlyMap = readonlyMap;
var readonlyNonEmptyArray = __importStar(require("./ReadonlyNonEmptyArray"));
exports.readonlyNonEmptyArray = readonlyNonEmptyArray;
var readonlyRecord = __importStar(require("./ReadonlyRecord"));
exports.readonlyRecord = readonlyRecord;
var readonlySet = __importStar(require("./ReadonlySet"));
exports.readonlySet = readonlySet;
var readonlyTuple = __importStar(require("./ReadonlyTuple"));
exports.readonlyTuple = readonlyTuple;
var record = __importStar(require("./Record"));
exports.record = record;
var ring = __importStar(require("./Ring"));
exports.ring = ring;
var semigroup = __importStar(require("./Semigroup"));
exports.semigroup = semigroup;
var semigroupoid = __importStar(require("./Semigroupoid"));
exports.semigroupoid = semigroupoid;
var semiring = __importStar(require("./Semiring"));
exports.semiring = semiring;
var separated = __importStar(require("./Separated"));
exports.separated = separated;
var set = __importStar(require("./Set"));
exports.set = set;
var show = __importStar(require("./Show"));
exports.show = show;
var state = __importStar(require("./State"));
exports.state = state;
var stateReaderTaskEither = __importStar(require("./StateReaderTaskEither"));
exports.stateReaderTaskEither = stateReaderTaskEither;
var stateT = __importStar(require("./StateT"));
exports.stateT = stateT;
var store = __importStar(require("./Store"));
exports.store = store;
var string = __importStar(require("./string"));
exports.string = string;
var strong = __importStar(require("./Strong"));
exports.strong = strong;
var struct = __importStar(require("./struct"));
exports.struct = struct;
var task = __importStar(require("./Task"));
exports.task = task;
var taskEither = __importStar(require("./TaskEither"));
exports.taskEither = taskEither;
var taskOption = __importStar(require("./TaskOption"));
exports.taskOption = taskOption;
var taskThese = __importStar(require("./TaskThese"));
exports.taskThese = taskThese;
var these = __importStar(require("./These"));
exports.these = these;
var theseT = __importStar(require("./TheseT"));
exports.theseT = theseT;
var traced = __importStar(require("./Traced"));
exports.traced = traced;
var traversable = __importStar(require("./Traversable"));
exports.traversable = traversable;
var traversableWithIndex = __importStar(require("./TraversableWithIndex"));
exports.traversableWithIndex = traversableWithIndex;
var tree = __importStar(require("./Tree"));
exports.tree = tree;
var tuple = __importStar(require("./Tuple"));
exports.tuple = tuple;
var unfoldable = __importStar(require("./Unfoldable"));
exports.unfoldable = unfoldable;
var validationT = __importStar(require("./ValidationT"));
exports.validationT = validationT;
var witherable = __importStar(require("./Witherable"));
exports.witherable = witherable;
var writer = __importStar(require("./Writer"));
exports.writer = writer;
var writerT = __importStar(require("./WriterT"));
exports.writerT = writerT;

}, function(modId) {var map = {"./Alt":1619349411468,"./Alternative":1619349411469,"./Applicative":1619349411470,"./Apply":1619349411471,"./Array":1619349411474,"./Bifunctor":1619349411490,"./boolean":1619349411491,"./BooleanAlgebra":1619349411492,"./Bounded":1619349411486,"./BoundedDistributiveLattice":1619349411493,"./BoundedJoinSemilattice":1619349411495,"./BoundedLattice":1619349411496,"./BoundedMeetSemilattice":1619349411497,"./Category":1619349411498,"./Chain":1619349411475,"./ChainRec":1619349411499,"./Choice":1619349411500,"./Comonad":1619349411501,"./Compactable":1619349411502,"./Console":1619349411503,"./Const":1619349411504,"./Contravariant":1619349411505,"./Date":1619349411506,"./DistributiveLattice":1619349411494,"./Either":1619349411507,"./EitherT":1619349411508,"./Eq":1619349411481,"./Extend":1619349411509,"./Field":1619349411487,"./Filterable":1619349411510,"./FilterableWithIndex":1619349411511,"./Foldable":1619349411512,"./FoldableWithIndex":1619349411513,"./FromEither":1619349411514,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./FunctorWithIndex":1619349411517,"./Group":1619349411518,"./HeytingAlgebra":1619349411519,"./HKT":1619349411520,"./Identity":1619349411521,"./Invariant":1619349411522,"./IO":1619349411523,"./IOEither":1619349411524,"./IORef":1619349411525,"./JoinSemilattice":1619349411526,"./Json":1619349411527,"./Lattice":1619349411528,"./Magma":1619349411529,"./Map":1619349411530,"./MeetSemilattice":1619349411532,"./Monad":1619349411533,"./MonadIO":1619349411534,"./MonadTask":1619349411535,"./MonadThrow":1619349411536,"./Monoid":1619349411489,"./NonEmptyArray":1619349411476,"./number":1619349411485,"./Option":1619349411478,"./OptionT":1619349411537,"./Ord":1619349411480,"./Ordering":1619349411538,"./pipeable":1619349411539,"./Pointed":1619349411540,"./Profunctor":1619349411541,"./Random":1619349411542,"./Reader":1619349411543,"./ReaderEither":1619349411544,"./ReaderT":1619349411545,"./ReaderTask":1619349411546,"./ReaderTaskEither":1619349411548,"./ReadonlyArray":1619349411484,"./ReadonlyMap":1619349411531,"./ReadonlyNonEmptyArray":1619349411482,"./ReadonlyRecord":1619349411550,"./ReadonlySet":1619349411551,"./ReadonlyTuple":1619349411552,"./Record":1619349411553,"./Ring":1619349411554,"./Semigroup":1619349411483,"./Semigroupoid":1619349411555,"./Semiring":1619349411556,"./Separated":1619349411479,"./Set":1619349411557,"./Show":1619349411488,"./State":1619349411558,"./StateReaderTaskEither":1619349411559,"./StateT":1619349411560,"./Store":1619349411561,"./string":1619349411562,"./Strong":1619349411563,"./struct":1619349411564,"./Task":1619349411547,"./TaskEither":1619349411549,"./TaskOption":1619349411565,"./TaskThese":1619349411566,"./These":1619349411567,"./TheseT":1619349411568,"./Traced":1619349411569,"./Traversable":1619349411570,"./TraversableWithIndex":1619349411571,"./Tree":1619349411572,"./Tuple":1619349411573,"./Unfoldable":1619349411574,"./ValidationT":1619349411575,"./Witherable":1619349411576,"./Writer":1619349411577,"./WriterT":1619349411578}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411468, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411469, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411470, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
/**
 * The `Applicative` type class extends the `Apply` type class with a `of` function, which can be used to create values
 * of type `f a` from values of type `a`.
 *
 * Where `Apply` provides the ability to lift functions of two or more arguments to functions whose arguments are
 * wrapped using `f`, and `Functor` provides the ability to lift functions of one argument, `pure` can be seen as the
 * function which lifts functions of _zero_ arguments. That is, `Applicative` functors support a lifting operation for
 * any number of function arguments.
 *
 * Instances must satisfy the following laws in addition to the `Apply` laws:
 *
 * 1. Identity: `A.ap(A.of(a => a), fa) <-> fa`
 * 2. Homomorphism: `A.ap(A.of(ab), A.of(a)) <-> A.of(ab(a))`
 * 3. Interchange: `A.ap(fab, A.of(a)) <-> A.ap(A.of(ab => ab(a)), fab)`
 *
 * Note. `Functor`'s `map` can be derived: `A.map(x, f) = A.ap(A.of(f), x)`
 *
 * @since 2.0.0
 */
var Apply_1 = require("./Apply");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
function getApplicativeMonoid(F) {
    var f = Apply_1.getApplySemigroup(F);
    return function (M) { return ({
        concat: f(M).concat,
        empty: F.of(M.empty)
    }); };
}
exports.getApplicativeMonoid = getApplicativeMonoid;
/** @deprecated */
function getApplicativeComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    var _ap = Apply_1.ap(F, G);
    return {
        map: map,
        of: function (a) { return F.of(G.of(a)); },
        ap: function (fgab, fga) { return function_1.pipe(fgab, _ap(fga)); }
    };
}
exports.getApplicativeComposition = getApplicativeComposition;

}, function(modId) { var map = {"./Apply":1619349411471,"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411471, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
var function_1 = require("./function");
function ap(F, G) {
    return function (fa) { return function (fab) {
        return F.ap(F.map(fab, function (gab) { return function (ga) { return G.ap(gab, ga); }; }), fa);
    }; };
}
exports.ap = ap;
function apFirst(A) {
    return function (second) { return function (first) {
        return A.ap(A.map(first, function (a) { return function () { return a; }; }), second);
    }; };
}
exports.apFirst = apFirst;
function apSecond(A) {
    return function (second) { return function (first) {
        return A.ap(A.map(first, function () { return function (b) { return b; }; }), second);
    }; };
}
exports.apSecond = apSecond;
function apS(F) {
    return function (name, fb) { return function (fa) {
        return F.ap(F.map(fa, function (a) { return function (b) {
            var _a;
            return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        }; }), fb);
    }; };
}
exports.apS = apS;
function getApplySemigroup(F) {
    return function (S) { return ({
        concat: function (first, second) {
            return F.ap(F.map(first, function (x) { return function (y) { return S.concat(x, y); }; }), second);
        }
    }); };
}
exports.getApplySemigroup = getApplySemigroup;
function curried(f, n, acc) {
    return function (x) {
        var combined = Array(acc.length + 1);
        for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
        }
        combined[acc.length] = x;
        return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
}
var tupleConstructors = {
    1: function (a) { return [a]; },
    2: function (a) { return function (b) { return [a, b]; }; },
    3: function (a) { return function (b) { return function (c) { return [a, b, c]; }; }; },
    4: function (a) { return function (b) { return function (c) { return function (d) { return [a, b, c, d]; }; }; }; },
    5: function (a) { return function (b) { return function (c) { return function (d) { return function (e) { return [a, b, c, d, e]; }; }; }; }; }
};
function getTupleConstructor(len) {
    if (!tupleConstructors.hasOwnProperty(len)) {
        tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
    }
    return tupleConstructors[len];
}
function sequenceT(F) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var len = args.length;
        var f = getTupleConstructor(len);
        var fas = F.map(args[0], f);
        for (var i = 1; i < len; i++) {
            fas = F.ap(fas, args[i]);
        }
        return fas;
    };
}
exports.sequenceT = sequenceT;
function getRecordConstructor(keys) {
    var len = keys.length;
    switch (len) {
        case 1:
            return function (a) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a);
            };
        case 2:
            return function (a) { return function (b) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a);
            }; };
        case 3:
            return function (a) { return function (b) { return function (c) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a);
            }; }; };
        case 4:
            return function (a) { return function (b) { return function (c) { return function (d) {
                var _a;
                return (_a = {},
                    _a[keys[0]] = a,
                    _a[keys[1]] = b,
                    _a[keys[2]] = c,
                    _a[keys[3]] = d,
                    _a);
            }; }; }; };
        case 5:
            return function (a) { return function (b) { return function (c) { return function (d) { return function (e) {
                var _a;
                return (_a = {},
                    _a[keys[0]] = a,
                    _a[keys[1]] = b,
                    _a[keys[2]] = c,
                    _a[keys[3]] = d,
                    _a[keys[4]] = e,
                    _a);
            }; }; }; }; };
        default:
            return curried(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var r = {};
                for (var i = 0; i < len; i++) {
                    r[keys[i]] = args[i];
                }
                return r;
            }, len - 1, []);
    }
}
function sequenceS(F) {
    return function (r) {
        var keys = Object.keys(r);
        var len = keys.length;
        var f = getRecordConstructor(keys);
        var fr = F.map(r[keys[0]], f);
        for (var i = 1; i < len; i++) {
            fr = F.ap(fr, r[keys[i]]);
        }
        return fr;
    };
}
exports.sequenceS = sequenceS;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411472, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.not = exports.unsafeCoerce = exports.identity = exports.getEndomorphismMonoid = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
var getBooleanAlgebra = function (B) { return function () { return ({
    meet: function (x, y) { return function (a) { return B.meet(x(a), y(a)); }; },
    join: function (x, y) { return function (a) { return B.join(x(a), y(a)); }; },
    zero: function () { return B.zero; },
    one: function () { return B.one; },
    implies: function (x, y) { return function (a) { return B.implies(x(a), y(a)); }; },
    not: function (x) { return function (a) { return B.not(x(a)); }; }
}); }; };
exports.getBooleanAlgebra = getBooleanAlgebra;
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate, getSemigroup } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.concat(f, g)(1), true)
 * assert.deepStrictEqual(S1.concat(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.concat(f, g)(1), true)
 * assert.deepStrictEqual(S2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function (S) { return function () { return ({
    concat: function (f, g) { return function (a) { return S.concat(f(a), g(a)); }; }
}); }; };
exports.getSemigroup = getSemigroup;
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate, getMonoid } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.concat(f, g)(1), true)
 * assert.deepStrictEqual(M1.concat(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.concat(f, g)(1), true)
 * assert.deepStrictEqual(M2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getMonoid = function (M) {
    var getSemigroupM = exports.getSemigroup(M);
    return function () { return ({
        concat: getSemigroupM().concat,
        empty: function () { return M.empty; }
    }); };
};
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.10.0
 */
var getSemiring = function (S) { return ({
    add: function (f, g) { return function (x) { return S.add(f(x), g(x)); }; },
    zero: function () { return S.zero; },
    mul: function (f, g) { return function (x) { return S.mul(f(x), g(x)); }; },
    one: function () { return S.one; }
}); };
exports.getSemiring = getSemiring;
/**
 * @category instances
 * @since 2.10.0
 */
var getRing = function (R) {
    var S = exports.getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function (f, g) { return function (x) { return R.sub(f(x), g(x)); }; }
    };
};
exports.getRing = getRing;
/**
 * Endomorphism form a monoid where the `empty` value is the identity function.
 *
 * @category instances
 * @since 2.10.0
 */
var getEndomorphismMonoid = function () { return ({
    concat: function (x, y) { return function (a) { return y(x(a)); }; },
    empty: identity
}); };
exports.getEndomorphismMonoid = getEndomorphismMonoid;
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
exports.identity = identity;
/**
 * @since 2.0.0
 */
exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
exports.not = not;
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
exports.constant = constant;
/**
 * A thunk that returns always `true`.
 *
 * @since 2.0.0
 */
exports.constTrue = 
/*#__PURE__*/
constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 2.0.0
 */
exports.constFalse = 
/*#__PURE__*/
constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 2.0.0
 */
exports.constNull = 
/*#__PURE__*/
constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @since 2.0.0
 */
exports.constUndefined = 
/*#__PURE__*/
constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 2.0.0
 */
exports.constVoid = exports.constUndefined;
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */
function flip(f) {
    return function (b, a) { return f(a, b); };
}
exports.flip = flip;
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
exports.flow = flow;
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
exports.tuple = tuple;
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
exports.increment = increment;
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
exports.decrement = decrement;
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}
exports.untupled = untupled;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
        case 11:
            return jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))));
        case 12:
            return kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))));
        case 13:
            return lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))));
        case 14:
            return mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))));
        case 15:
            return no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))));
        case 16:
            return op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))));
        case 17:
            return pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))));
        case 18:
            return qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))));
        case 19:
            return rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))))));
        case 20:
            return st(rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))))));
    }
    return;
}
exports.pipe = pipe;
/**
 * Type hole simulation
 *
 * @since 2.7.0
 */
exports.hole = absurd;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411473, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctorComposition = exports.bindTo = exports.flap = exports.map = void 0;
/**
 * A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) <-> fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) <-> F.map(F.map(fa, ab), bc)`
 *
 * @since 2.0.0
 */
var function_1 = require("./function");
function map(F, G) {
    return function (f) { return function (fa) { return F.map(fa, function (ga) { return G.map(ga, f); }); }; };
}
exports.map = map;
function flap(F) {
    return function (a) { return function (fab) { return F.map(fab, function (f) { return f(a); }); }; };
}
exports.flap = flap;
function bindTo(F) {
    return function (name) { return function (fa) { return F.map(fa, function (a) {
        var _a;
        return (_a = {}, _a[name] = a, _a);
    }); }; };
}
exports.bindTo = bindTo;
/** @deprecated */
function getFunctorComposition(F, G) {
    var _map = map(F, G);
    return {
        map: function (fga, f) { return function_1.pipe(fga, _map(f)); }
    };
}
exports.getFunctorComposition = getFunctorComposition;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411474, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.copy = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.foldLeft = exports.matchLeft = exports.replicate = exports.range = exports.makeBy = exports.append = exports.prepend = void 0;
exports.flap = exports.Functor = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = exports.foldMapWithIndex = exports.foldMap = exports.duplicate = exports.extend = exports.filterWithIndex = exports.alt = exports.altW = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.filter = exports.separate = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.mapWithIndex = exports.flatten = exports.chain = exports.ap = exports.map = exports.zero = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = void 0;
exports.array = exports.prependToAll = exports.snoc = exports.cons = exports.empty = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.some = exports.every = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Unfoldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = void 0;
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var NEA = __importStar(require("./NonEmptyArray"));
var O = __importStar(require("./Option"));
var RA = __importStar(require("./ReadonlyArray"));
var Separated_1 = require("./Separated");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Prepend an element to the front of a `Array`, creating a new `NonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.prepend = NEA.prepend;
/**
 * Append an element to the end of a `Array`, creating a new `NonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.append = NEA.append;
/**
 * Return a `Array` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/Array'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.0.0
 */
var makeBy = function (n, f) { return (n <= 0 ? [] : NEA.makeBy(n, f)); };
exports.makeBy = makeBy;
/**
 * Create an `Array` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.0.0
 */
var range = function (start, end) {
    return start <= end ? exports.makeBy(end - start + 1, function (i) { return start + i; }) : [start];
};
exports.range = range;
/**
 * Create a `Array` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.0.0
 */
var replicate = function (n, a) { return exports.makeBy(n, function () { return a; }); };
exports.replicate = replicate;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Break an array into its first element and remaining elements
 *
 * @example
 * import { matchLeft } from 'fp-ts/Array'
 *
 * const len: <A>(as: Array<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @category destructors
 * @since 2.10.0
 */
var matchLeft = function (onEmpty, onNonEmpty) { return function (as) {
    return exports.isNonEmpty(as) ? onNonEmpty(NEA.head(as), NEA.tail(as)) : onEmpty();
}; };
exports.matchLeft = matchLeft;
/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.foldLeft = exports.matchLeft;
/**
 * Break an array into its initial elements and the last element
 *
 * @category destructors
 * @since 2.10.0
 */
var matchRight = function (onEmpty, onNonEmpty) { return function (as) {
    return exports.isNonEmpty(as) ? onNonEmpty(NEA.init(as), NEA.last(as)) : onEmpty();
}; };
exports.matchRight = matchRight;
/**
 * Alias of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.foldRight = exports.matchRight;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.7.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * @example
 * import { scanLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.0.0
 */
var scanLeft = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[0] = b;
    for (var i = 0; i < len; i++) {
        out[i + 1] = f(out[i], as[i]);
    }
    return out;
}; };
exports.scanLeft = scanLeft;
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.0.0
 */
var scanRight = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[len] = b;
    for (var i = len - 1; i >= 0; i--) {
        out[i] = f(as[i], out[i + 1]);
    }
    return out;
}; };
exports.scanRight = scanRight;
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.0.0
 */
exports.isEmpty = RA.isEmpty;
/**
 * Test whether an array is non empty narrowing down the type to `NonEmptyArray<A>`
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNonEmpty = NEA.isNonEmpty;
/**
 * Calculate the number of elements in a `Array`.
 *
 * @since 2.10.0
 */
var size = function (as) { return as.length; };
exports.size = size;
/**
 * Test whether an array contains a particular index
 *
 * @since 2.0.0
 */
exports.isOutOfBound = NEA.isOutOfBound;
// TODO: remove non-curried overloading in v3
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)
 *
 * @since 2.0.0
 */
exports.lookup = RA.lookup;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
exports.head = RA.head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
exports.last = RA.last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
var tail = function (as) { return (exports.isNonEmpty(as) ? O.some(NEA.tail(as)) : O.none); };
exports.tail = tail;
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
var init = function (as) { return (exports.isNonEmpty(as) ? O.some(NEA.init(as)) : O.none); };
exports.init = init;
/**
 * Keep only a max number of elements from the start of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { takeLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeLeft(2)([1, 2, 3]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */
var takeLeft = function (n) { return function (as) { return (exports.isOutOfBound(n, as) ? exports.copy(as) : as.slice(0, n)); }; };
exports.takeLeft = takeLeft;
/**
 * Keep only a max number of elements from the end of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { takeRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5])
 *
 * @category combinators
 * @since 2.0.0
 */
var takeRight = function (n) { return function (as) {
    return exports.isOutOfBound(n, as) ? exports.copy(as) : n === 0 ? [] : as.slice(-n);
}; };
exports.takeRight = takeRight;
function takeLeftWhile(predicate) {
    return function (as) {
        var out = [];
        for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        return out;
    };
}
exports.takeLeftWhile = takeLeftWhile;
var spanLeftIndex = function (as, predicate) {
    var l = as.length;
    var i = 0;
    for (; i < l; i++) {
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return function (as) {
        var _a = exports.splitAt(spanLeftIndex(as, predicate))(as), init = _a[0], rest = _a[1];
        return { init: init, rest: rest };
    };
}
exports.spanLeft = spanLeft;
/**
 * Drop a max number of elements from the start of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { dropLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3])
 *
 * @category combinators
 * @since 2.0.0
 */
var dropLeft = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? exports.copy(as) : n >= as.length ? [] : as.slice(n, as.length);
}; };
exports.dropLeft = dropLeft;
/**
 * Drop a max number of elements from the end of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { dropRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropRight(2)([1, 2, 3, 4, 5]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */
var dropRight = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? exports.copy(as) : n >= as.length ? [] : as.slice(0, as.length - n);
}; };
exports.dropRight = dropRight;
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.0.0
 */
var dropLeftWhile = function (predicate) { return function (as) {
    return as.slice(spanLeftIndex(as, predicate));
}; };
exports.dropLeftWhile = dropLeftWhile;
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.0.0
 */
exports.findIndex = RA.findIndex;
function findFirst(predicate) {
    return RA.findFirst(predicate);
}
exports.findFirst = findFirst;
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @category destructors
 * @since 2.0.0
 */
exports.findFirstMap = RA.findFirstMap;
function findLast(predicate) {
    return RA.findLast(predicate);
}
exports.findLast = findLast;
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @category destructors
 * @since 2.0.0
 */
exports.findLastMap = RA.findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.0.0
 */
exports.findLastIndex = RA.findLastIndex;
/**
 * @category combinators
 * @since 2.0.0
 */
var copy = function (as) { return as.slice(); };
exports.copy = copy;
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/Array'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.0.0
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? O.none : O.some(exports.unsafeInsertAt(i, a, as));
}; };
exports.insertAt = insertAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.0.0
 */
var updateAt = function (i, a) { return exports.modifyAt(i, function () { return a; }); };
exports.updateAt = updateAt;
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.0.0
 */
var deleteAt = function (i) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeDeleteAt(i, as));
}; };
exports.deleteAt = deleteAt;
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.0.0
 */
var modifyAt = function (i, f) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as));
}; };
exports.modifyAt = modifyAt;
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.0.0
 */
var reverse = function (as) { return (exports.isEmpty(as) ? [] : as.slice().reverse()); };
exports.reverse = reverse;
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/Array'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */
var rights = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
exports.rights = rights;
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/Array'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.0.0
 */
var lefts = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
exports.lefts = lefts;
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */
var sort = function (O) { return function (as) {
    return as.length <= 1 ? exports.copy(as) : as.slice().sort(O.compare);
}; };
exports.sort = sort;
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.0.0
 */
var zipWith = function (fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @since 2.0.0
 */
var unzip = function (as) {
    var fa = [];
    var fb = [];
    for (var i = 0; i < as.length; i++) {
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) {
    var f = NEA.prependAll(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : []); };
};
exports.prependAll = prependAll;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) {
    var f = NEA.intersperse(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.intersperse = intersperse;
/**
 * Rotate a `Array` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */
var rotate = function (n) {
    var f = NEA.rotate(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.rotate = rotate;
// TODO: remove non-curried overloading in v3
/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `Array<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)
 *
 * @since 2.0.0
 */
exports.elem = RA.elem;
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */
var uniq = function (E) {
    var f = NEA.uniq(E);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.uniq = uniq;
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/Array'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.0.0
 */
var sortBy = function (ords) {
    var f = NEA.sortBy(ords);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.sortBy = sortBy;
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as A from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
 *   return A.chop(as => {
 *     const { init, rest } = pipe(as, A.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.0.0
 */
var chop = function (f) {
    var g = NEA.chop(f);
    return function (as) { return (exports.isNonEmpty(as) ? g(as) : []); };
};
exports.chop = chop;
/**
 * Splits an `Array` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.0.0
 */
var splitAt = function (n) { return function (as) {
    return n >= 1 && exports.isNonEmpty(as) ? NEA.splitAt(n)(as) : exports.isEmpty(as) ? [exports.copy(as), []] : [[], exports.copy(as)];
}; };
exports.splitAt = splitAt;
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.0.0
 */
var chunksOf = function (n) {
    var f = NEA.chunksOf(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : []); };
};
exports.chunksOf = chunksOf;
function comprehension(input, f, g) {
    if (g === void 0) { g = function () { return true; }; }
    var go = function (scope, input) {
        return exports.isNonEmpty(input)
            ? function_1.pipe(NEA.head(input), exports.chain(function (x) { return go(function_1.pipe(scope, exports.append(x)), NEA.tail(input)); }))
            : g.apply(void 0, scope) ? [f.apply(void 0, scope)]
                : [];
    };
    return go([], input);
}
exports.comprehension = comprehension;
function union(E) {
    var unionE = NEA.union(E);
    return function (first, second) {
        if (second === undefined) {
            var unionE_1 = union(E);
            return function (ys) { return unionE_1(ys, first); };
        }
        return exports.isNonEmpty(first) && exports.isNonEmpty(second)
            ? unionE(first, second)
            : exports.isNonEmpty(first)
                ? exports.copy(first)
                : exports.copy(second);
    };
}
exports.union = union;
function intersection(E) {
    var elemE = exports.elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var intersectionE_1 = intersection(E);
            return function (ys) { return intersectionE_1(ys, xs); };
        }
        return xs.filter(function (a) { return elemE(a, ys); });
    };
}
exports.intersection = intersection;
function difference(E) {
    var elemE = exports.elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var differenceE_1 = difference(E);
            return function (ys) { return differenceE_1(ys, xs); };
        }
        return xs.filter(function (a) { return !elemE(a, ys); });
    };
}
exports.difference = difference;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _filter = function (fa, predicate) { return function_1.pipe(fa, exports.filter(predicate)); };
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _partitionWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.partitionWithIndex(predicateWithIndex)); };
/* istanbul ignore next */
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.partitionMapWithIndex(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _filterMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.filterMapWithIndex(f)); };
/* istanbul ignore next */
var _filterWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.filterWithIndex(predicateWithIndex)); };
/* istanbul ignore next */
var _extend = function (fa, f) { return function_1.pipe(fa, exports.extend(f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = NEA.of;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return []; };
exports.zero = zero;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return fa.map(function (a) { return f(a); }); }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }); };
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) {
    return function_1.pipe(ma, exports.chainWithIndex(function (_, a) { return f(a); }));
}; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category FunctorWithIndex
 * @since 2.0.0
 */
var mapWithIndex = function (f) { return function (fa) {
    return fa.map(function (a, i) { return f(i, a); });
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var out = [];
    for (var i = 0; i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (O.isSome(optionB)) {
            out.push(optionB.value);
        }
    }
    return out;
}; };
exports.filterMapWithIndex = filterMapWithIndex;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filterMap = function (f) {
    return exports.filterMapWithIndex(function (_, a) { return f(a); });
};
exports.filterMap = filterMap;
/**
 * @category Compactable
 * @since 2.0.0
 */
exports.compact = 
/*#__PURE__*/
exports.filterMap(function_1.identity);
/**
 * @category Compactable
 * @since 2.0.0
 */
var separate = function (fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var e = fa_1[_i];
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filter = function (predicate) { return function (fa) { return fa.filter(predicate); }; };
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partition = function (predicate) {
    return exports.partitionWithIndex(function (_, a) { return predicate(a); });
};
exports.partition = partition;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var partitionWithIndex = function (predicateWithIndex) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var a = fa[i];
        if (predicateWithIndex(i, a)) {
            right.push(a);
        }
        else {
            left.push(a);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionWithIndex = partitionWithIndex;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partitionMap = function (f) { return exports.partitionMapWithIndex(function (_, a) { return f(a); }); };
exports.partitionMap = partitionMap;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var e = f(i, fa[i]);
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionMapWithIndex = partitionMapWithIndex;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) { return fa.concat(that()); }; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = exports.altW;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var filterWithIndex = function (predicateWithIndex) { return function (fa) {
    return fa.filter(function (a, i) { return predicateWithIndex(i, a); });
}; };
exports.filterWithIndex = filterWithIndex;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return wa.map(function (_, i) { return f(wa.slice(i)); });
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.foldMap = RA.foldMap;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.foldMapWithIndex = RA.foldMapWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduce = RA.reduce;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceWithIndex = RA.reduceWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduceRight = RA.reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceRightWithIndex = RA.reduceRightWithIndex;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return _reduce(ta, F.of(exports.zero()), function (fas, fa) {
        return F.ap(F.map(fas, function (as) { return function (a) { return function_1.pipe(as, exports.append(a)); }; }), fa);
    });
}; };
exports.sequence = sequence;
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) {
    return exports.reduceWithIndex(F.of(exports.zero()), function (i, fbs, a) {
        return F.ap(F.map(fbs, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, a));
    });
}; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
/**
 * @category Unfoldable
 * @since 2.6.6
 */
var unfold = function (b, f) {
    var out = [];
    var bb = b;
    while (true) {
        var mt = f(bb);
        if (O.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
        }
        else {
            break;
        }
    }
    return out;
};
exports.unfold = unfold;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Array';
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RA.getShow;
/**
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) { return first.concat(second); }
}); };
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` for `Array<A>`
 *
 * @example
 * import { getMonoid } from 'fp-ts/Array'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.0.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: []
}); };
exports.getMonoid = getMonoid;
/**
 * Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/Array'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RA.getEq;
/**
 * Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/Array'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 * @category instances
 * @since 2.0.0
 */
exports.getOrd = RA.getOrd;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Unfoldable = {
    URI: exports.URI,
    unfold: exports.unfold
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: exports.sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------
/**
 * @category unsafe
 * @since 2.0.0
 */
exports.unsafeInsertAt = NEA.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.0.0
 */
var unsafeUpdateAt = function (i, a, as) {
    return exports.isNonEmpty(as) ? NEA.unsafeUpdateAt(i, a, as) : [];
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @category unsafe
 * @since 2.0.0
 */
var unsafeDeleteAt = function (i, as) {
    var xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
exports.unsafeDeleteAt = unsafeDeleteAt;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.every = RA.every;
/**
 * @since 2.9.0
 */
var some = function (predicate) { return function (as) { return as.some(predicate); }; };
exports.some = some;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use a new `[]` instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.empty = [];
/**
 * Use `prepend` instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.cons = NEA.cons;
/**
 * Use `append` instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.snoc = NEA.snoc;
/**
 * Use `prependAll` instead
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.array = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero: exports.zero,
    unfold: exports.unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};

}, function(modId) { var map = {"./Apply":1619349411471,"./Chain":1619349411475,"./function":1619349411472,"./Functor":1619349411473,"./NonEmptyArray":1619349411476,"./Option":1619349411478,"./ReadonlyArray":1619349411484,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411475, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = exports.chainFirst = void 0;
function chainFirst(M) {
    return function (f) { return function (first) { return M.chain(first, function (a) { return M.map(f(a), function () { return a; }); }); }; };
}
exports.chainFirst = chainFirst;
function bind(M) {
    return function (name, f) { return function (ma) { return M.chain(ma, function (a) { return M.map(f(a), function (b) {
        var _a;
        return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
    }); }); }; };
}
exports.bind = bind;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411476, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.alt = exports.altW = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.foldMap = exports.foldMapWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.of = exports.copy = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.groupBy = exports.groupSort = exports.group = exports.reverse = exports.concat = exports.unappend = exports.unprepend = exports.fromArray = exports.fromReadonlyNonEmptyArray = exports.makeBy = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.prepend = exports.isOutOfBound = exports.isNonEmpty = void 0;
exports.nonEmptyArray = exports.fold = exports.prependToAll = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = void 0;
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var _ = __importStar(require("./internal"));
var O = __importStar(require("./Option"));
var Ord_1 = require("./Ord");
var RNEA = __importStar(require("./ReadonlyNonEmptyArray"));
// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
var isNonEmpty = function (as) { return as.length > 0; };
exports.isNonEmpty = isNonEmpty;
/**
 * @internal
 */
var isOutOfBound = function (i, as) { return i < 0 || i >= as.length; };
exports.isOutOfBound = isOutOfBound;
/**
 * @internal
 */
var prepend = function (head) { return function (tail) { return __spreadArray([head], tail); }; };
exports.prepend = prepend;
/**
 * @internal
 */
var append = function (end) { return function (init) { return concat(init, [end]); }; };
exports.append = append;
/**
 * @internal
 */
var unsafeInsertAt = function (i, a, as) {
    if (exports.isNonEmpty(as)) {
        var xs = exports.fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [a];
};
exports.unsafeInsertAt = unsafeInsertAt;
/**
 * @internal
 */
var unsafeUpdateAt = function (i, a, as) {
    var xs = exports.fromReadonlyNonEmptyArray(as);
    xs[i] = a;
    return xs;
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @internal
 */
var uniq = function (E) { return function (as) {
    if (as.length === 1) {
        return exports.copy(as);
    }
    var out = [exports.head(as)];
    var rest = exports.tail(as);
    var _loop_1 = function (a) {
        if (out.every(function (o) { return !E.equals(o, a); })) {
            out.push(a);
        }
    };
    for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
        var a = rest_1[_i];
        _loop_1(a);
    }
    return out;
}; };
exports.uniq = uniq;
/**
 * @internal
 */
var sortBy = function (ords) {
    if (exports.isNonEmpty(ords)) {
        var M = Ord_1.getMonoid();
        return exports.sort(ords.reduce(M.concat, M.empty));
    }
    return exports.copy;
};
exports.sortBy = sortBy;
/**
 * @internal
 */
var union = function (E) {
    var uniqE = exports.uniq(E);
    return function (first, second) { return uniqE(concat(first, second)); };
};
exports.union = union;
/**
 * @internal
 */
var rotate = function (n) { return function (as) {
    var len = as.length;
    var m = Math.round(n) % len;
    if (exports.isOutOfBound(Math.abs(m), as) || m === 0) {
        return exports.copy(as);
    }
    if (m < 0) {
        var _a = exports.splitAt(-m)(as), f = _a[0], s = _a[1];
        return concat(s, f);
    }
    else {
        return exports.rotate(m - len)(as);
    }
}; };
exports.rotate = rotate;
/**
 * @internal
 */
var makeBy = function (n, f) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1; i < j; i++) {
        out.push(f(i));
    }
    return out;
};
exports.makeBy = makeBy;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromReadonlyNonEmptyArray = _.fromReadonlyNonEmptyArray;
/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @category constructors
 * @since 2.0.0
 */
var fromArray = function (as) { return (exports.isNonEmpty(as) ? O.some(as) : O.none); };
exports.fromArray = fromArray;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3]), [1, [2, 3]])
 *
 * @category destructors
 * @since 2.9.0
 */
var unprepend = function (as) { return [exports.head(as), exports.tail(as)]; };
exports.unprepend = unprepend;
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
var unappend = function (as) { return [exports.init(as), exports.last(as)]; };
exports.unappend = unappend;
function concat(first, second) {
    return first.concat(second);
}
exports.concat = concat;
/**
 * @category combinators
 * @since 2.0.0
 */
var reverse = function (as) { return __spreadArray([exports.last(as)], as.slice(0, -1).reverse()); };
exports.reverse = reverse;
function group(E) {
    return function (as) {
        var len = as.length;
        if (len === 0) {
            return [];
        }
        var out = [];
        var head = as[0];
        var nea = [head];
        for (var i = 1; i < len; i++) {
            var a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            }
            else {
                out.push(nea);
                head = a;
                nea = [head];
            }
        }
        out.push(nea);
        return out;
    };
}
exports.group = group;
function groupSort(O) {
    var sortO = exports.sort(O);
    var groupO = group(O);
    return function (as) { return (exports.isNonEmpty(as) ? groupO(sortO(as)) : []); };
}
exports.groupSort = groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.0.0
 */
var groupBy = function (f) { return function (as) {
    var out = {};
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (out.hasOwnProperty(k)) {
            out[k].push(a);
        }
        else {
            out[k] = [a];
        }
    }
    return out;
}; };
exports.groupBy = groupBy;
/**
 * @category combinators
 * @since 2.0.0
 */
var sort = function (O) { return function (as) {
    return as.slice().sort(O.compare);
}; };
exports.sort = sort;
/**
 * @category combinators
 * @since 2.0.0
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? O.none : O.some(exports.unsafeInsertAt(i, a, as));
}; };
exports.insertAt = insertAt;
/**
 * @category combinators
 * @since 2.0.0
 */
var updateAt = function (i, a) {
    return exports.modifyAt(i, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * @category combinators
 * @since 2.0.0
 */
var modifyAt = function (i, f) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as));
}; };
exports.modifyAt = modifyAt;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.copy = exports.fromReadonlyNonEmptyArray;
/**
 * @category Pointed
 * @since 2.0.0
 */
var of = function (a) { return [a]; };
exports.of = of;
/**
 * @category combinators
 * @since 2.5.1
 */
var zipWith = function (as, bs, f) {
    var cs = [f(as[0], bs[0])];
    var len = Math.min(as.length, bs.length);
    for (var i = 1; i < len; i++) {
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * @category combinators
 * @since 2.5.1
 */
var unzip = function (abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1; i < abs.length; i++) {
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) { return function (as) {
    var out = [middle, as[0]];
    for (var i = 1; i < as.length; i++) {
        out.push(middle, as[i]);
    }
    return out;
}; };
exports.prependAll = prependAll;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) { return function (as) {
    var rest = exports.tail(as);
    return exports.isNonEmpty(rest) ? function_1.pipe(rest, exports.prependAll(middle), exports.prepend(exports.head(as))) : exports.copy(as);
}; };
exports.intersperse = intersperse;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.foldMapWithIndex = RNEA.foldMapWithIndex;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.foldMap = RNEA.foldMap;
/**
 * @category combinators
 * @since 2.10.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = exports.fromReadonlyNonEmptyArray(f(0, exports.head(as)));
    for (var i = 1; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var chop = function (f) { return function (as) {
    var _a = f(as), b = _a[0], rest = _a[1];
    var out = [b];
    var next = rest;
    while (exports.isNonEmpty(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
    }
    return out;
}; };
exports.chop = chop;
/**
 * Splits a `NonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
var splitAt = function (n) { return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [exports.copy(as), []] : [function_1.pipe(as.slice(1, m), exports.prepend(exports.head(as))), as.slice(m)];
}; };
exports.splitAt = splitAt;
/**
 * @category combinators
 * @since 2.10.0
 */
var chunksOf = function (n) { return exports.chop(exports.splitAt(n)); };
exports.chunksOf = chunksOf;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (as) {
    return concat(as, that());
}; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
exports.alt = exports.altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (as) {
    return exports.chain(function (f) { return function_1.pipe(as, exports.map(f)); });
};
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) {
    return exports.chainWithIndex(function (_, a) { return f(a); });
};
exports.chain = chain;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (as) {
    var next = exports.tail(as);
    var out = [f(as)];
    while (exports.isNonEmpty(next)) {
        out.push(f(next));
        next = exports.tail(next);
    }
    return out;
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return exports.mapWithIndex(function (_, a) { return f(a); }); };
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.0.0
 */
var mapWithIndex = function (f) { return function (as) {
    var out = [f(0, exports.head(as))];
    for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i]));
    }
    return out;
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduce = RNEA.reduce;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceWithIndex = RNEA.reduceWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduceRight = RNEA.reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceRightWithIndex = RNEA.reduceRightWithIndex;
/**
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return exports.traverseWithIndex(F)(function (_, a) { return a; }); };
exports.sequence = sequence;
/**
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) { return function (as) {
    var out = F.map(f(0, exports.head(as)), exports.of);
    for (var i = 1; i < as.length; i++) {
        out = F.ap(F.map(out, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, as[i]));
    }
    return out;
}; }; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @since 2.7.0
 */
exports.extract = RNEA.head;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'NonEmptyArray';
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RNEA.getShow;
/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @category instances
 * @since 2.0.0
 */
var getSemigroup = function () { return ({
    concat: concat
}); };
exports.getSemigroup = getSemigroup;
/**
 * @example
 * import { getEq } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RNEA.getEq;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
exports.head = RNEA.head;
/**
 * @since 2.0.0
 */
var tail = function (as) { return as.slice(1); };
exports.tail = tail;
/**
 * @since 2.0.0
 */
exports.last = RNEA.last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.2.0
 */
var init = function (as) { return as.slice(0, -1); };
exports.init = init;
/**
 * @since 2.0.0
 */
exports.min = RNEA.min;
/**
 * @since 2.0.0
 */
exports.max = RNEA.max;
/**
 * @since 2.10.0
 */
var concatAll = function (S) { return function (as) { return as.reduce(S.concat); }; };
exports.concatAll = concatAll;
function filter(predicate) {
    // tslint:disable-next-line: deprecation
    return exports.filterWithIndex(function (_, a) { return predicate(a); });
}
exports.filter = filter;
/**
 * Use [`filterWithIndex`](./Array.ts.html#filterWithIndex) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var filterWithIndex = function (predicate) { return function (as) { return exports.fromArray(as.filter(function (a, i) { return predicate(i, a); })); }; };
exports.filterWithIndex = filterWithIndex;
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */
exports.uncons = exports.unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */
exports.unsnoc = exports.unappend;
function cons(head, tail) {
    return tail === undefined ? exports.prepend(head) : function_1.pipe(tail, exports.prepend(head));
}
exports.cons = cons;
/**
 * Use [`append`](./Array.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var snoc = function (init, end) { return function_1.pipe(init, exports.append(end)); };
exports.snoc = snoc;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
exports.fold = RNEA.concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.nonEmptyArray = {
    URI: exports.URI,
    of: exports.of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: _chain,
    extend: _extend,
    extract: exports.extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};

}, function(modId) { var map = {"./Apply":1619349411471,"./Chain":1619349411475,"./function":1619349411472,"./Functor":1619349411473,"./internal":1619349411477,"./Option":1619349411478,"./Ord":1619349411480,"./ReadonlyNonEmptyArray":1619349411482}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411477, function(require, module, exports) {

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromReadonlyNonEmptyArray = exports.has = exports.isLeft = exports.isSome = void 0;
// -------------------------------------------------------------------------------------
// Option
// -------------------------------------------------------------------------------------
/** @internal */
var isSome = function (fa) { return fa._tag === 'Some'; };
exports.isSome = isSome;
// -------------------------------------------------------------------------------------
// Either
// -------------------------------------------------------------------------------------
/** @internal */
var isLeft = function (ma) { return ma._tag === 'Left'; };
exports.isLeft = isLeft;
// -------------------------------------------------------------------------------------
// Record
// -------------------------------------------------------------------------------------
/** @internal */
exports.has = Object.prototype.hasOwnProperty;
// -------------------------------------------------------------------------------------
// NonEmptyArray
// -------------------------------------------------------------------------------------
/** @internal */
var fromReadonlyNonEmptyArray = function (as) { return __spreadArray([as[0]], as.slice(1)); };
exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411478, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.duplicate = exports.extend = exports.throwError = exports.zero = exports.alt = exports.altW = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.fromEither = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = exports.isNone = exports.isSome = void 0;
exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.getRefinement = exports.exists = exports.elem = exports.MonadThrow = exports.Witherable = exports.Traversable = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Foldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getMonoid = exports.getLastMonoid = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var _ = __importStar(require("./internal"));
var Separated_1 = require("./Separated");
// -------------------------------------------------------------------------------------
// guards
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @category guards
 * @since 2.0.0
 */
exports.isSome = _.isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @category guards
 * @since 2.0.0
 */
var isNone = function (fa) { return fa._tag === 'None'; };
exports.isNone = isNone;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */
exports.none = { _tag: 'None' };
/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @category constructors
 * @since 2.0.0
 */
var some = function (a) { return ({ _tag: 'Some', value: a }); };
exports.some = some;
function fromPredicate(predicate) {
    return function (a) { return (predicate(a) ? exports.some(a) : exports.none); };
}
exports.fromPredicate = fromPredicate;
/**
 * Returns the `Left` value of an `Either` if possible.
 *
 * @example
 * import { getLeft, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 *
 * @category constructors
 * @since 2.0.0
 */
function getLeft(ma) {
    return ma._tag === 'Right' ? exports.none : exports.some(ma.left);
}
exports.getLeft = getLeft;
/**
 * Returns the `Right` value of an `Either` if possible.
 *
 * @example
 * import { getRight, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(left('a')), none)
 *
 * @category constructors
 * @since 2.0.0
 */
function getRight(ma) {
    return ma._tag === 'Left' ? exports.none : exports.some(ma.right);
}
exports.getRight = getRight;
/**
 * Transforms an `Either` to an `Option` discarding the error.
 *
 * Alias of [getRight](#getright)
 *
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = getRight;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onNone, onSome) { return function (ma) {
    return exports.isNone(ma) ? onNone() : onSome(ma.value);
}; };
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchW;
/**
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, match } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
exports.match = exports.matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
var getOrElseW = function (onNone) { return function (ma) { return (exports.isNone(ma) ? onNone() : ma.value); }; };
exports.getOrElseW = getOrElseW;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = exports.getOrElseW;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */
var fromNullable = function (a) { return (a == null ? exports.none : exports.some(a)); };
exports.fromNullable = fromNullable;
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f) {
    try {
        return exports.some(f());
    }
    catch (e) {
        return exports.none;
    }
};
exports.tryCatch = tryCatch;
/**
 * Converts a function that may throw to one returning a `Option`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.tryCatch(function () { return f.apply(void 0, a); });
}; };
exports.tryCatchK = tryCatchK;
/**
 * Returns a *smart constructor* from a function that returns a nullable value.
 *
 * @example
 * import { fromNullableK, none, some } from 'fp-ts/Option'
 *
 * const f = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const g = fromNullableK(f)
 *
 * assert.deepStrictEqual(g('1'), some(1))
 * assert.deepStrictEqual(g('a'), none)
 *
 * @category interop
 * @since 2.9.0
 */
var fromNullableK = function (f) { return function_1.flow(f, exports.fromNullable); };
exports.fromNullableK = fromNullableK;
/**
 * This is `chain` + `fromNullable`, useful when working with optional values.
 *
 * @example
 * import { some, none, fromNullable, chainNullableK } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Employee {
 *   readonly company?: {
 *     readonly address?: {
 *       readonly street?: {
 *         readonly name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   none
 * )
 *
 * @category interop
 * @since 2.9.0
 */
var chainNullableK = function (f) { return function (ma) {
    return exports.isNone(ma) ? exports.none : exports.fromNullable(f(ma.value));
}; };
exports.chainNullableK = chainNullableK;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @category interop
 * @since 2.0.0
 */
exports.toNullable = 
/*#__PURE__*/
exports.match(function_1.constNull, function_1.identity);
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @category interop
 * @since 2.0.0
 */
exports.toUndefined = 
/*#__PURE__*/
exports.match(function_1.constUndefined, function_1.identity);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
var _filter = function (fa, predicate) { return function_1.pipe(fa, exports.filter(predicate)); };
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) {
    return exports.isNone(fa) ? exports.none : exports.some(f(fa.value));
}; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) {
    return exports.isNone(fab) ? exports.none : exports.isNone(fa) ? exports.none : exports.some(fab.value(fa.value));
}; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.7.0
 */
exports.of = exports.some;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) {
    return exports.isNone(ma) ? exports.none : f(ma.value);
}; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) {
    return exports.isNone(fa) ? that() : fa;
}; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Option` returns the left-most non-`None` value.
 *
 * @example
 * import * as O from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('a')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('b')
 * )
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = exports.altW;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return exports.none; };
exports.zero = zero;
/**
 * @category MonadThrow
 * @since 2.7.0
 */
var throwError = function () { return exports.none; };
exports.throwError = throwError;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return exports.isNone(wa) ? exports.none : exports.some(f(wa));
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    return exports.isNone(fa) ? b : f(b, fa.value);
}; };
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) { return function (fa) {
    return exports.isNone(fa) ? M.empty : f(fa.value);
}; }; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return exports.isNone(fa) ? b : f(fa.value, b);
}; };
exports.reduceRight = reduceRight;
/**
 * @category Compactable
 * @since 2.0.0
 */
exports.compact = exports.flatten;
var defaultSeparated = 
/*#__PURE__*/
Separated_1.separated(exports.none, exports.none);
/**
 * @category Compactable
 * @since 2.0.0
 */
var separate = function (ma) {
    return exports.isNone(ma) ? defaultSeparated : Separated_1.separated(getLeft(ma.value), getRight(ma.value));
};
exports.separate = separate;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filter = function (predicate) { return function (fa) { return (exports.isNone(fa) ? exports.none : predicate(fa.value) ? fa : exports.none); }; };
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filterMap = function (f) { return function (fa) {
    return exports.isNone(fa) ? exports.none : f(fa.value);
}; };
exports.filterMap = filterMap;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partition = function (predicate) { return function (fa) {
    return Separated_1.separated(_filter(fa, function (a) { return !predicate(a); }), _filter(fa, predicate));
}; };
exports.partition = partition;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partitionMap = function (f) { return function_1.flow(exports.map(f), exports.separate); };
exports.partitionMap = partitionMap;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) { return (exports.isNone(ta) ? F.of(exports.none) : F.map(f(ta.value), exports.some)); }; }; };
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) { return (exports.isNone(ta) ? F.of(exports.none) : F.map(ta.value, exports.some)); }; };
exports.sequence = sequence;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) { return function (f) { return function (fa) { return (exports.isNone(fa) ? F.of(exports.none) : f(fa.value)); }; }; };
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) { return function (f) { return function (fa) {
    return exports.isNone(fa) ? F.of(defaultSeparated) : F.map(f(fa.value), function (e) { return Separated_1.separated(getLeft(e), getRight(e)); });
}; }; };
exports.wilt = wilt;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Option';
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(S) {
    return {
        show: function (ma) { return (exports.isNone(ma) ? 'none' : "some(" + S.show(ma.value) + ")"); }
    };
}
exports.getShow = getShow;
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @category instances
 * @since 2.0.0
 */
function getEq(E) {
    return {
        equals: function (x, y) { return x === y || (exports.isNone(x) ? exports.isNone(y) : exports.isNone(y) ? false : E.equals(x.value, y.value)); }
    };
}
exports.getEq = getEq;
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const O = getOrd(N.Ord)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @category instances
 * @since 2.0.0
 */
function getOrd(O) {
    return {
        equals: getEq(O).equals,
        compare: function (x, y) { return (x === y ? 0 : exports.isSome(x) ? (exports.isSome(y) ? O.compare(x.value, y.value) : 1) : -1); }
    };
}
exports.getOrd = getOrd;
/**
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @category instances
 * @since 2.0.0
 */
function getFirstMonoid() {
    return {
        concat: function (x, y) { return (exports.isNone(x) ? y : x); },
        empty: exports.none
    };
}
exports.getFirstMonoid = getFirstMonoid;
/**
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @category instances
 * @since 2.0.0
 */
function getLastMonoid() {
    return {
        concat: function (x, y) { return (exports.isNone(y) ? x : y); },
        empty: exports.none
    };
}
exports.getLastMonoid = getLastMonoid;
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(a) | some(a)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/Option'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @category instances
 * @since 2.0.0
 */
function getMonoid(S) {
    return {
        concat: function (x, y) { return (exports.isNone(x) ? y : exports.isNone(y) ? x : exports.some(S.concat(x.value, y.value))); },
        empty: exports.none
    };
}
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#__PURE__*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * assert.strictEqual(elem(N.Eq)(1, some(1)), true)
 * assert.strictEqual(elem(N.Eq)(2, some(1)), false)
 * assert.strictEqual(elem(N.Eq)(1, none), false)
 *
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (exports.isNone(ma) ? false : E.equals(a, ma.value)); };
}
exports.elem = elem;
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (exports.isNone(ma) ? false : predicate(ma.value)); };
}
exports.exists = exists;
/**
 * Returns a `Refinement` (i.e. a custom type guard) from a `Option` returning function.
 * This function ensures that a custom type guard definition is type-safe.
 *
 * ```ts
 * import { some, none, getRefinement } from 'fp-ts/Option'
 *
 * type A = { type: 'A' }
 * type B = { type: 'B' }
 * type C = A | B
 *
 * const isA = (c: C): c is A => c.type === 'B' // <= typo but typescript doesn't complain
 * const isA = getRefinement<C, A>(c => (c.type === 'B' ? some(c) : none)) // static error: Type '"B"' is not assignable to type '"A"'
 * ```
 *
 * @since 2.0.0
 */
function getRefinement(getOption) {
    return function (a) { return exports.isSome(getOption(a)); };
}
exports.getRefinement = getRefinement;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        var b = f(i, as[i]);
        if (exports.isNone(b)) {
            return exports.none;
        }
        out.push(b.value);
    }
    return exports.some(out);
}; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return exports.traverseArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`chainNullableK`](#chainnullablek) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.mapNullable = exports.chainNullableK;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.option = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    zero: exports.zero,
    alt: _alt,
    extend: _extend,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./function":1619349411472,"./Functor":1619349411473,"./internal":1619349411477,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411479, function(require, module, exports) {

/**
 * ```ts
 * interface Separated<E, A> {
 *    readonly left: E
 *    readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @since 2.10.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */
var separated = function (left, right) { return ({ left: left, right: right }); };
exports.separated = separated;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
var _bimap = function (fa, g, f) { return function_1.pipe(fa, exports.bimap(g, f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */
var map = function (f) { return function (fa) {
    return exports.separated(exports.left(fa), f(exports.right(fa)));
}; };
exports.map = map;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var mapLeft = function (f) { return function (fa) {
    return exports.separated(f(exports.left(fa)), exports.right(fa));
}; };
exports.mapLeft = mapLeft;
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var bimap = function (f, g) { return function (fa) {
    return exports.separated(f(exports.left(fa)), g(exports.right(fa)));
}; };
exports.bimap = bimap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
exports.URI = 'Separated';
/**
 * @category instances
 * @since 2.10.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */
var left = function (s) { return s.left; };
exports.left = left;
/**
 * @since 2.10.0
 */
var right = function (s) { return s.right; };
exports.right = right;

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411480, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
var Eq_1 = require("./Eq");
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------
/**
 * @category defaults
 * @since 2.10.0
 */
var equalsDefault = function (compare) { return function (first, second) {
    return first === second || compare(first, second) === 0;
}; };
exports.equalsDefault = equalsDefault;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
var fromCompare = function (compare) { return ({
    equals: exports.equalsDefault(compare),
    compare: function (first, second) { return (first === second ? 0 : compare(first, second)); }
}); };
exports.fromCompare = fromCompare;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Ord'
 * import * as B from 'fp-ts/boolean'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var ords = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ords[_i] = arguments[_i];
    }
    return exports.fromCompare(function (first, second) {
        var i = 0;
        for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first[i], second[i]);
            if (r !== 0) {
                return r;
            }
        }
        return ords[i].compare(first[i], second[i]);
    });
};
exports.tuple = tuple;
/**
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (O) { return exports.fromCompare(function (first, second) { return O.compare(second, first); }); };
exports.reverse = reverse;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var contramap_ = function (fa, f) { return function_1.pipe(fa, exports.contramap(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function (f) { return function (fa) {
    return exports.fromCompare(function (first, second) { return fa.compare(f(first), f(second)); });
}; };
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Ord';
/**
 * @category instances
 * @since 2.0.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) {
        return exports.fromCompare(function (a, b) {
            var ox = first.compare(a, b);
            return ox !== 0 ? ox : second.compare(a, b);
        });
    }
}); };
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import { contramap, reverse, getMonoid } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as B from 'fp-ts/boolean'
 * import { pipe } from 'fp-ts/function'
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @category instances
 * @since 2.4.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: exports.fromCompare(function () { return 0; })
}); };
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
// TODO: curry in v3
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */
var lt = function (O) { return function (first, second) { return O.compare(first, second) === -1; }; };
exports.lt = lt;
// TODO: curry in v3
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */
var gt = function (O) { return function (first, second) { return O.compare(first, second) === 1; }; };
exports.gt = gt;
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */
var leq = function (O) { return function (first, second) { return O.compare(first, second) !== 1; }; };
exports.leq = leq;
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */
var geq = function (O) { return function (first, second) { return O.compare(first, second) !== -1; }; };
exports.geq = geq;
// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var min = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) < 1 ? first : second;
}; };
exports.min = min;
// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var max = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) > -1 ? first : second;
}; };
exports.max = max;
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
var clamp = function (O) {
    var minO = exports.min(O);
    var maxO = exports.max(O);
    return function (low, hi) { return function (a) { return maxO(minO(a, hi), low); }; };
};
exports.clamp = clamp;
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */
var between = function (O) {
    var ltO = exports.lt(O);
    var gtO = exports.gt(O);
    return function (low, hi) { return function (a) { return (ltO(a, low) || gtO(a, hi) ? false : true); }; };
};
exports.between = between;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleOrd = exports.tuple;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualOrd = exports.reverse;
/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ord = exports.Contravariant;
// default compare for primitive types
function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
var strictOrd = {
    equals: Eq_1.eqStrict.equals,
    compare: compare
};
/**
 * Use [`Ord`](./boolean.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordBoolean = strictOrd;
/**
 * Use [`Ord`](./string.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordString = strictOrd;
/**
 * Use [`Ord`](./number.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordNumber = strictOrd;
/**
 * Use [`Ord`](./Date.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordDate = 
/*#__PURE__*/
function_1.pipe(
// tslint:disable-next-line: deprecation
exports.ordNumber, 
/*#__PURE__*/
exports.contramap(function (date) { return date.valueOf(); }));

}, function(modId) { var map = {"./Eq":1619349411481,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411481, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
function fromEquals(equals) {
    return {
        equals: function (x, y) { return x === y || equals(x, y); }
    };
}
exports.fromEquals = fromEquals;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function (eqs) {
    return fromEquals(function (first, second) {
        for (var key in eqs) {
            if (!eqs[key].equals(first[key], second[key])) {
                return false;
            }
        }
        return true;
    });
};
exports.struct = struct;
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Eq'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import * as B from 'fp-ts/boolean'
 *
 * const E = tuple(S.Eq, N.Eq, B.Eq)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var eqs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eqs[_i] = arguments[_i];
    }
    return fromEquals(function (first, second) { return eqs.every(function (E, i) { return E.equals(first[i], second[i]); }); });
};
exports.tuple = tuple;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var contramap_ = function (fa, f) { return function_1.pipe(fa, exports.contramap(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function (f) { return function (fa) {
    return fromEquals(function (x, y) { return fa.equals(f(x), f(y)); });
}; };
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Eq';
/**
 * @category instances
 * @since 2.5.0
 */
exports.eqStrict = {
    equals: function (a, b) { return a === b; }
};
var empty = {
    equals: function () { return true; }
};
/**
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function () { return ({
    concat: function (x, y) { return fromEquals(function (a, b) { return x.equals(a, b) && y.equals(a, b); }); }
}); };
exports.getSemigroup = getSemigroup;
/**
 * @category instances
 * @since 2.6.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: empty
}); };
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleEq = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructEq = exports.struct;
/**
 * Use [`eqStrict`](#eqstrict) instead
 *
 * @since 2.0.0
 * @deprecated
 */
exports.strictEqual = exports.eqStrict.equals;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eq = exports.Contravariant;
/**
 * Use [`Eq`](./boolean.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqBoolean = exports.eqStrict;
/**
 * Use [`Eq`](./string.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqString = exports.eqStrict;
/**
 * Use [`Eq`](./number.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqNumber = exports.eqStrict;
/**
 * Use [`Eq`](./Date.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqDate = {
    equals: function (first, second) { return first.valueOf() === second.valueOf(); }
};

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411482, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.groupSort = exports.group = exports.reverse = exports.concat = exports.fromArray = exports.unappend = exports.unprepend = exports.fromReadonlyArray = exports.makeBy = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.prepend = exports.isOutOfBound = exports.isNonEmpty = exports.empty = void 0;
exports.readonlyNonEmptyArray = exports.fold = exports.prependToAll = exports.insertAt = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = void 0;
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Eq_1 = require("./Eq");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var _ = __importStar(require("./internal"));
var O = __importStar(require("./Option"));
var Ord_1 = require("./Ord");
var Se = __importStar(require("./Semigroup"));
// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
exports.empty = [];
/**
 * @internal
 */
var isNonEmpty = function (as) { return as.length > 0; };
exports.isNonEmpty = isNonEmpty;
/**
 * @internal
 */
var isOutOfBound = function (i, as) { return i < 0 || i >= as.length; };
exports.isOutOfBound = isOutOfBound;
/**
 * @internal
 */
var prepend = function (head) { return function (tail) { return __spreadArray([head], tail); }; };
exports.prepend = prepend;
/**
 * @internal
 */
var append = function (end) { return function (init) { return concat(init, [end]); }; };
exports.append = append;
/**
 * @internal
 */
var unsafeInsertAt = function (i, a, as) {
    if (exports.isNonEmpty(as)) {
        var xs = _.fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [a];
};
exports.unsafeInsertAt = unsafeInsertAt;
/**
 * @internal
 */
var unsafeUpdateAt = function (i, a, as) {
    if (as[i] === a) {
        return as;
    }
    else {
        var xs = _.fromReadonlyNonEmptyArray(as);
        xs[i] = a;
        return xs;
    }
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @internal
 */
var uniq = function (E) { return function (as) {
    if (as.length === 1) {
        return as;
    }
    var out = [exports.head(as)];
    var rest = exports.tail(as);
    var _loop_1 = function (a) {
        if (out.every(function (o) { return !E.equals(o, a); })) {
            out.push(a);
        }
    };
    for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
        var a = rest_1[_i];
        _loop_1(a);
    }
    return out;
}; };
exports.uniq = uniq;
/**
 * @internal
 */
var sortBy = function (ords) {
    if (exports.isNonEmpty(ords)) {
        var M = Ord_1.getMonoid();
        return exports.sort(ords.reduce(M.concat, M.empty));
    }
    return function_1.identity;
};
exports.sortBy = sortBy;
/**
 * @internal
 */
var union = function (E) {
    var uniqE = exports.uniq(E);
    return function (first, second) { return uniqE(concat(first, second)); };
};
exports.union = union;
/**
 * @internal
 */
var rotate = function (n) { return function (as) {
    var len = as.length;
    var m = Math.round(n) % len;
    if (exports.isOutOfBound(Math.abs(m), as) || m === 0) {
        return as;
    }
    if (m < 0) {
        var _a = exports.splitAt(-m)(as), f = _a[0], s = _a[1];
        return concat(s, f);
    }
    else {
        return exports.rotate(m - len)(as);
    }
}; };
exports.rotate = rotate;
/**
 * @internal
 */
var makeBy = function (n, f) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1; i < j; i++) {
        out.push(f(i));
    }
    return out;
};
exports.makeBy = makeBy;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.
 *
 * @category constructors
 * @since 2.5.0
 */
var fromReadonlyArray = function (as) {
    return exports.isNonEmpty(as) ? O.some(as) : O.none;
};
exports.fromReadonlyArray = fromReadonlyArray;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])
 *
 * @category destructors
 * @since 2.9.0
 */
var unprepend = function (as) { return [exports.head(as), exports.tail(as)]; };
exports.unprepend = unprepend;
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
var unappend = function (as) { return [exports.init(as), exports.last(as)]; };
exports.unappend = unappend;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
var fromArray = function (as) { return exports.fromReadonlyArray(as.slice()); };
exports.fromArray = fromArray;
function concat(first, second) {
    return first.concat(second);
}
exports.concat = concat;
/**
 * @category combinators
 * @since 2.5.0
 */
var reverse = function (as) {
    return as.length === 1 ? as : __spreadArray([exports.last(as)], as.slice(0, -1).reverse());
};
exports.reverse = reverse;
function group(E) {
    return function (as) {
        var len = as.length;
        if (len === 0) {
            return exports.empty;
        }
        var out = [];
        var head = as[0];
        var nea = [head];
        for (var i = 1; i < len; i++) {
            var a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            }
            else {
                out.push(nea);
                head = a;
                nea = [head];
            }
        }
        out.push(nea);
        return out;
    };
}
exports.group = group;
function groupSort(O) {
    var sortO = exports.sort(O);
    var groupO = group(O);
    return function (as) { return (exports.isNonEmpty(as) ? groupO(sortO(as)) : exports.empty); };
}
exports.groupSort = groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.5.0
 */
var groupBy = function (f) { return function (as) {
    var out = {};
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (out.hasOwnProperty(k)) {
            out[k].push(a);
        }
        else {
            out[k] = [a];
        }
    }
    return out;
}; };
exports.groupBy = groupBy;
/**
 * @category combinators
 * @since 2.5.0
 */
var sort = function (O) { return function (as) {
    return as.length === 1 ? as : as.slice().sort(O.compare);
}; };
exports.sort = sort;
/**
 * @category combinators
 * @since 2.5.0
 */
var updateAt = function (i, a) {
    return exports.modifyAt(i, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * @category combinators
 * @since 2.5.0
 */
var modifyAt = function (i, f) { return function (as) { return (exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as))); }; };
exports.modifyAt = modifyAt;
/**
 * @category combinators
 * @since 2.5.1
 */
var zipWith = function (as, bs, f) {
    var cs = [f(as[0], bs[0])];
    var len = Math.min(as.length, bs.length);
    for (var i = 1; i < len; i++) {
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * @category combinators
 * @since 2.5.1
 */
var unzip = function (abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1; i < abs.length; i++) {
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) { return function (as) {
    var out = [middle, as[0]];
    for (var i = 1; i < as.length; i++) {
        out.push(middle, as[i]);
    }
    return out;
}; };
exports.prependAll = prependAll;
/**
 * Places an element in between members of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) { return function (as) {
    var rest = exports.tail(as);
    return exports.isNonEmpty(rest) ? function_1.pipe(rest, exports.prependAll(middle), exports.prepend(exports.head(as))) : as;
}; };
exports.intersperse = intersperse;
/**
 * @category combinators
 * @since 2.10.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = _.fromReadonlyNonEmptyArray(f(0, exports.head(as)));
    for (var i = 1; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often used for "chopping" up the input
 * `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a
 * value and the tail of the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
var chop = function (f) { return function (as) {
    var _a = f(as), b = _a[0], rest = _a[1];
    var out = [b];
    var next = rest;
    while (exports.isNonEmpty(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
    }
    return out;
}; };
exports.chop = chop;
/**
 * Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
var splitAt = function (n) { return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [as, exports.empty] : [function_1.pipe(as.slice(1, m), exports.prepend(exports.head(as))), as.slice(m)];
}; };
exports.splitAt = splitAt;
/**
 * Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
var chunksOf = function (n) { return exports.chop(exports.splitAt(n)); };
exports.chunksOf = chunksOf;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.5.0
 */
var of = function (a) { return [a]; };
exports.of = of;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (as) { return concat(as, that()); }; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
exports.alt = exports.altW;
/**
 * @category Apply
 * @since 2.5.0
 */
var ap = function (as) { return exports.chain(function (f) { return function_1.pipe(as, exports.map(f)); }); };
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
var chain = function (f) { return exports.chainWithIndex(function (_, a) { return f(a); }); };
exports.chain = chain;
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (as) {
    var next = exports.tail(as);
    var out = [f(as)];
    while (exports.isNonEmpty(next)) {
        out.push(f(next));
        next = exports.tail(next);
    }
    return out;
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) {
    return exports.mapWithIndex(function (_, a) { return f(a); });
};
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
var mapWithIndex = function (f) { return function (as) {
    var out = [f(0, exports.head(as))];
    for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i]));
    }
    return out;
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return exports.reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduce = reduce;
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (S) { return function (f) { return function (as) {
    return as.slice(1).reduce(function (s, a) { return S.concat(s, f(a)); }, f(as[0]));
}; }; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return exports.reduceRightWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduceRight = reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceWithIndex = function (b, f) { return function (as) {
    return as.reduce(function (b, a, i) { return f(i, b, a); }, b);
}; };
exports.reduceWithIndex = reduceWithIndex;
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var foldMapWithIndex = function (S) { return function (f) { return function (as) { return as.slice(1).reduce(function (s, a, i) { return S.concat(s, f(i + 1, a)); }, f(0, as[0])); }; }; };
exports.foldMapWithIndex = foldMapWithIndex;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceRightWithIndex = function (b, f) { return function (as) { return as.reduceRight(function (b, a, i) { return f(i, a, b); }, b); }; };
exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return exports.traverseWithIndex(F)(function (_, a) { return a; }); };
exports.sequence = sequence;
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) { return function (as) {
    var out = F.map(f(0, exports.head(as)), exports.of);
    for (var i = 1; i < as.length; i++) {
        out = F.ap(F.map(out, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, as[i]));
    }
    return out;
}; }; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @category Comonad
 * @since 2.6.3
 */
var extract = function (as) { return as[0]; };
exports.extract = extract;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyNonEmptyArray';
/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function (S) { return ({
    show: function (as) { return "[" + as.map(S.show).join(', ') + "]"; }
}); };
exports.getShow = getShow;
/**
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @category instances
 * @since 2.5.0
 */
var getSemigroup = function () { return ({
    concat: concat
}); };
exports.getSemigroup = getSemigroup;
/**
 * @example
 * import { getEq } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.5.0
 */
var getEq = function (E) {
    return Eq_1.fromEquals(function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return E.equals(x, ys[i]); }); });
};
exports.getEq = getEq;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.5.0
 */
exports.head = exports.extract;
/**
 * @since 2.5.0
 */
var tail = function (as) { return as.slice(1); };
exports.tail = tail;
/**
 * @since 2.5.0
 */
var last = function (as) { return as[as.length - 1]; };
exports.last = last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.5.0
 */
var init = function (as) { return as.slice(0, -1); };
exports.init = init;
/**
 * @since 2.5.0
 */
var min = function (O) {
    var S = Se.min(O);
    return function (as) { return as.reduce(S.concat); };
};
exports.min = min;
/**
 * @since 2.5.0
 */
var max = function (O) {
    var S = Se.max(O);
    return function (as) { return as.reduce(S.concat); };
};
exports.max = max;
/**
 * @since 2.10.0
 */
var concatAll = function (S) { return function (as) { return as.reduce(S.concat); }; };
exports.concatAll = concatAll;
function filter(predicate) {
    // tslint:disable-next-line: deprecation
    return exports.filterWithIndex(function (_, a) { return predicate(a); });
}
exports.filter = filter;
/**
 * Use [`filterWithIndex`](./ReadonlyArray.ts.html#filterWithIndex) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var filterWithIndex = function (predicate) { return function (as) { return exports.fromReadonlyArray(as.filter(function (a, i) { return predicate(i, a); })); }; };
exports.filterWithIndex = filterWithIndex;
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
exports.uncons = exports.unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
exports.unsnoc = exports.unappend;
function cons(head, tail) {
    return tail === undefined ? exports.prepend(head) : function_1.pipe(tail, exports.prepend(head));
}
exports.cons = cons;
/**
 * Use [`append`](./ReadonlyArray.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
var snoc = function (init, end) { return concat(init, [end]); };
exports.snoc = snoc;
/**
 * Use [`insertAt`](./ReadonlyArray.ts.html#insertAt) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? O.none : O.some(exports.unsafeInsertAt(i, a, as));
}; };
exports.insertAt = insertAt;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
exports.fold = exports.concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyNonEmptyArray = {
    URI: exports.URI,
    of: exports.of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: _chain,
    extend: _extend,
    extract: exports.extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};

}, function(modId) { var map = {"./Apply":1619349411471,"./Chain":1619349411475,"./Eq":1619349411481,"./function":1619349411472,"./Functor":1619349411473,"./internal":1619349411477,"./Option":1619349411478,"./Ord":1619349411480,"./Semigroup":1619349411483}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411483, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.concatAll = exports.semigroupVoid = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 2.0.0
 */
var function_1 = require("./function");
var _ = __importStar(require("./internal"));
var Or = __importStar(require("./Ord"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a semigroup where `concat` will return the minimum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.min(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function (O) { return ({
    concat: Or.min(O)
}); };
exports.min = min;
/**
 * Get a semigroup where `concat` will return the maximum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.max(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */
var max = function (O) { return ({
    concat: Or.max(O)
}); };
exports.max = max;
/**
 * @category constructors
 * @since 2.10.0
 */
var constant = function (a) { return ({
    concat: function () { return a; }
}); };
exports.constant = constant;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (S) { return ({
    concat: function (x, y) { return S.concat(y, x); }
}); };
exports.reverse = reverse;
/**
 * Given a struct of semigroups returns a semigroup for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const S = struct<Point>({
 *   x: N.SemigroupSum,
 *   y: N.SemigroupSum
 * })
 *
 * assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */
var struct = function (semigroups) { return ({
    concat: function (first, second) {
        var r = {};
        for (var k in semigroups) {
            if (_.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first[k], second[k]);
            }
        }
        return r;
    }
}); };
exports.struct = struct;
/**
 * Given a tuple of semigroups returns a semigroup for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Semigroup'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const S1 = tuple(S.Semigroup, N.SemigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var semigroups = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        semigroups[_i] = arguments[_i];
    }
    return ({
        concat: function (first, second) { return semigroups.map(function (s, i) { return s.concat(first[i], second[i]); }); }
    });
};
exports.tuple = tuple;
/**
 * Between each pair of elements insert `middle`.
 *
 * @example
 * import { intercalate } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * const S1 = pipe(S.Semigroup, intercalate(' + '))
 *
 * assert.strictEqual(S1.concat('a', 'b'), 'a + b')
 *
 * @category combinators
 * @since 2.10.0
 */
var intercalate = function (middle) { return function (S) { return ({
    concat: function (x, y) { return S.concat(x, S.concat(middle, y)); }
}); }; };
exports.intercalate = intercalate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * Always return the first argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)
 *
 * @category instances
 * @since 2.10.0
 */
var first = function () { return ({ concat: function_1.identity }); };
exports.first = first;
/**
 * Always return the last argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)
 *
 * @category instances
 * @since 2.10.0
 */
var last = function () { return ({ concat: function (_, y) { return y; } }); };
exports.last = last;
/**
 * @category instances
 * @since 2.0.0
 */
exports.semigroupVoid = exports.constant(undefined);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * const sum = concatAll(N.SemigroupSum)(0)
 *
 * assert.deepStrictEqual(sum([1, 2, 3]), 6)
 * assert.deepStrictEqual(sum([]), 0)
 *
 * @since 2.10.0
 */
var concatAll = function (S) { return function (startWith) { return function (as) {
    return as.reduce(S.concat, startWith);
}; }; };
exports.concatAll = concatAll;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`getAssignSemigroup`](./struct.ts.html#getAssignSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getObjectSemigroup = function () { return ({
    concat: function (first, second) { return Object.assign({}, first, second); }
}); };
exports.getObjectSemigroup = getObjectSemigroup;
/**
 * Use [`last`](#last) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getLastSemigroup = exports.last;
/**
 * Use [`first`](#first) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFirstSemigroup = exports.first;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleSemigroup = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructSemigroup = exports.struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualSemigroup = exports.reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getJoinSemigroup = exports.max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getMeetSemigroup = exports.min;
/**
 * Use [`intercalate`](#intercalate) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
exports.getIntercalateSemigroup = exports.intercalate;
function fold(S) {
    var concatAllS = exports.concatAll(S);
    return function (startWith, as) { return (as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as)); };
}
exports.fold = fold;
/**
 * Use [`SemigroupAll`](./boolean.ts.html#SemigroupAll) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupAll = {
    concat: function (x, y) { return x && y; }
};
/**
 * Use [`SemigroupAny`](./boolean.ts.html#SemigroupAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupAny = {
    concat: function (x, y) { return x || y; }
};
/**
 * Use [`getSemigroup`](./function.ts.html#getSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionSemigroup = function_1.getSemigroup;
/**
 * Use [`Semigroup`](./string.ts.html#Semigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupString = {
    concat: function (x, y) { return x + y; }
};
/**
 * Use [`SemigroupSum`](./number.ts.html#SemigroupSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupSum = {
    concat: function (x, y) { return x + y; }
};
/**
 * Use [`SemigroupProduct`](./number.ts.html#SemigroupProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupProduct = {
    concat: function (x, y) { return x * y; }
};

}, function(modId) { var map = {"./function":1619349411472,"./internal":1619349411477,"./Ord":1619349411480}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411484, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.foldLeft = exports.matchLeft = exports.replicate = exports.range = exports.makeBy = exports.append = exports.prepend = void 0;
exports.Pointed = exports.flap = exports.Functor = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.foldMap = exports.reduce = exports.foldMapWithIndex = exports.duplicate = exports.extend = exports.filterWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.filter = exports.separate = exports.mapWithIndex = exports.map = exports.flatten = exports.chain = exports.ap = exports.alt = exports.altW = exports.zero = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = void 0;
exports.readonlyArray = exports.prependToAll = exports.snoc = exports.cons = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.some = exports.every = exports.empty = exports.fromArray = exports.toArray = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Unfoldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = void 0;
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Eq_1 = require("./Eq");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var N = __importStar(require("./number"));
var O = __importStar(require("./Option"));
var Ord_1 = require("./Ord");
var RNEA = __importStar(require("./ReadonlyNonEmptyArray"));
var Separated_1 = require("./Separated");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.prepend = RNEA.prepend;
/**
 * Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.append = RNEA.append;
/**
 * Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/ReadonlyArray'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.5.0
 */
var makeBy = function (n, f) { return (n <= 0 ? exports.empty : RNEA.makeBy(n, f)); };
exports.makeBy = makeBy;
/**
 * Create a `ReadonlyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.5.0
 */
var range = function (start, end) {
    return start <= end ? exports.makeBy(end - start + 1, function (i) { return start + i; }) : [start];
};
exports.range = range;
/**
 * Create a `ReadonlyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.5.0
 */
var replicate = function (n, a) { return exports.makeBy(n, function () { return a; }); };
exports.replicate = replicate;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Break an array into its first element and remaining elements.
 *
 * @example
 * import { matchLeft } from 'fp-ts/ReadonlyArray'
 *
 * const len: <A>(as: ReadonlyArray<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @category destructors
 * @since 2.10.0
 */
var matchLeft = function (onEmpty, onNonEmpty) { return function (as) { return (exports.isNonEmpty(as) ? onNonEmpty(RNEA.head(as), RNEA.tail(as)) : onEmpty()); }; };
exports.matchLeft = matchLeft;
/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.5.0
 */
exports.foldLeft = exports.matchLeft;
/**
 * Break an array into its initial elements and the last element.
 *
 * @category destructors
 * @since 2.10.0
 */
var matchRight = function (onEmpty, onNonEmpty) { return function (as) { return (exports.isNonEmpty(as) ? onNonEmpty(RNEA.init(as), RNEA.last(as)) : onEmpty()); }; };
exports.matchRight = matchRight;
/**
 * Alias of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.5.0
 */
exports.foldRight = exports.matchRight;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.7.0
 */
var chainWithIndex = function (f) { return function (as) {
    if (exports.isEmpty(as)) {
        return exports.empty;
    }
    var out = [];
    for (var i = 0; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @example
 * import { scanLeft } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.5.0
 */
var scanLeft = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[0] = b;
    for (var i = 0; i < len; i++) {
        out[i + 1] = f(out[i], as[i]);
    }
    return out;
}; };
exports.scanLeft = scanLeft;
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.5.0
 */
var scanRight = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[len] = b;
    for (var i = len - 1; i >= 0; i--) {
        out[i] = f(as[i], out[i + 1]);
    }
    return out;
}; };
exports.scanRight = scanRight;
/**
 * Test whether a `ReadonlyArray` is empty.
 *
 * @example
 * import { isEmpty } from 'fp-ts/ReadonlyArray'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.5.0
 */
var isEmpty = function (as) { return as.length === 0; };
exports.isEmpty = isEmpty;
/**
 * Test whether a `ReadonlyArray` is non empty.
 *
 * @category guards
 * @since 2.5.0
 */
exports.isNonEmpty = RNEA.isNonEmpty;
/**
 * Calculate the number of elements in a `ReadonlyArray`.
 *
 * @since 2.10.0
 */
var size = function (as) { return as.length; };
exports.size = size;
/**
 * Test whether an array contains a particular index
 *
 * @since 2.5.0
 */
exports.isOutOfBound = RNEA.isOutOfBound;
function lookup(i, as) {
    return as === undefined ? function (as) { return lookup(i, as); } : exports.isOutOfBound(i, as) ? O.none : O.some(as[i]);
}
exports.lookup = lookup;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.5.0
 */
var head = function (as) { return (exports.isNonEmpty(as) ? O.some(RNEA.head(as)) : O.none); };
exports.head = head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.5.0
 */
var last = function (as) { return (exports.isNonEmpty(as) ? O.some(RNEA.last(as)) : O.none); };
exports.last = last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.5.0
 */
var tail = function (as) {
    return exports.isNonEmpty(as) ? O.some(RNEA.tail(as)) : O.none;
};
exports.tail = tail;
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.5.0
 */
var init = function (as) {
    return exports.isNonEmpty(as) ? O.some(RNEA.init(as)) : O.none;
};
exports.init = init;
/**
 * Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
 * assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var takeLeft = function (n) { return function (as) {
    return exports.isOutOfBound(n, as) ? as : n === 0 ? exports.empty : as.slice(0, n);
}; };
exports.takeLeft = takeLeft;
/**
 * Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeRight(4)), input)
 * assert.strictEqual(pipe(input, RA.takeRight(-1)), input)
 *
 * @since 2.5.0
 */
var takeRight = function (n) { return function (as) {
    return exports.isOutOfBound(n, as) ? as : n === 0 ? exports.empty : as.slice(-n);
}; };
exports.takeRight = takeRight;
function takeLeftWhile(predicate) {
    return function (as) {
        var out = [];
        for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        var len = out.length;
        return len === as.length ? as : len === 0 ? exports.empty : out;
    };
}
exports.takeLeftWhile = takeLeftWhile;
var spanLeftIndex = function (as, predicate) {
    var l = as.length;
    var i = 0;
    for (; i < l; i++) {
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return function (as) {
        var _a = exports.splitAt(spanLeftIndex(as, predicate))(as), init = _a[0], rest = _a[1];
        return { init: init, rest: rest };
    };
}
exports.spanLeft = spanLeft;
/**
 * Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
 * assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
 * assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var dropLeft = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? as : n >= as.length ? exports.empty : as.slice(n, as.length);
}; };
exports.dropLeft = dropLeft;
/**
 * Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
 * assert.strictEqual(pipe(input, RA.dropRight(0)), input)
 * assert.strictEqual(pipe(input, RA.dropRight(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var dropRight = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? as : n >= as.length ? exports.empty : as.slice(0, as.length - n);
}; };
exports.dropRight = dropRight;
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.5.0
 */
var dropLeftWhile = function (predicate) { return function (as) {
    var i = spanLeftIndex(as, predicate);
    return i === 0 ? as : i === as.length ? exports.empty : as.slice(i);
}; };
exports.dropLeftWhile = dropLeftWhile;
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.5.0
 */
var findIndex = function (predicate) { return function (as) {
    for (var i = 0; i < as.length; i++) {
        if (predicate(as[i])) {
            return O.some(i);
        }
    }
    return O.none;
}; };
exports.findIndex = findIndex;
function findFirst(predicate) {
    return function (as) {
        for (var i = 0; i < as.length; i++) {
            if (predicate(as[i])) {
                return O.some(as[i]);
            }
        }
        return O.none;
    };
}
exports.findFirst = findFirst;
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.5.0
 */
var findFirstMap = function (f) { return function (as) {
    for (var i = 0; i < as.length; i++) {
        var out = f(as[i]);
        if (O.isSome(out)) {
            return out;
        }
    }
    return O.none;
}; };
exports.findFirstMap = findFirstMap;
function findLast(predicate) {
    return function (as) {
        for (var i = as.length - 1; i >= 0; i--) {
            if (predicate(as[i])) {
                return O.some(as[i]);
            }
        }
        return O.none;
    };
}
exports.findLast = findLast;
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.5.0
 */
var findLastMap = function (f) { return function (as) {
    for (var i = as.length - 1; i >= 0; i--) {
        var out = f(as[i]);
        if (O.isSome(out)) {
            return out;
        }
    }
    return O.none;
}; };
exports.findLastMap = findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: ReadonlyArray<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.5.0
 */
var findLastIndex = function (predicate) { return function (as) {
    for (var i = as.length - 1; i >= 0; i--) {
        if (predicate(as[i])) {
            return O.some(i);
        }
    }
    return O.none;
}; };
exports.findLastIndex = findLastIndex;
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/ReadonlyArray'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.5.0
 */
exports.insertAt = 
// tslint:disable-next-line: deprecation
RNEA.insertAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.5.0
 */
var updateAt = function (i, a) {
    return exports.modifyAt(i, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.5.0
 */
var deleteAt = function (i) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeDeleteAt(i, as));
}; };
exports.deleteAt = deleteAt;
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.5.0
 */
var modifyAt = function (i, f) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as));
}; };
exports.modifyAt = modifyAt;
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.5.0
 */
var reverse = function (as) { return (as.length <= 1 ? as : as.slice().reverse()); };
exports.reverse = reverse;
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/ReadonlyArray'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */
var rights = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
exports.rights = rights;
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/ReadonlyArray'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.5.0
 */
var lefts = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
exports.lefts = lefts;
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */
var sort = function (O) { return function (as) {
    return as.length <= 1 ? as : as.slice().sort(O.compare);
}; };
exports.sort = sort;
// TODO: curry and make data-last in v3
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.5.0
 */
var zipWith = function (fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @category combinators
 * @since 2.5.0
 */
var unzip = function (as) {
    var fa = [];
    var fb = [];
    for (var i = 0; i < as.length; i++) {
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) {
    var f = RNEA.prependAll(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.prependAll = prependAll;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) {
    var f = RNEA.intersperse(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.intersperse = intersperse;
/**
 * Rotate a `ReadonlyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */
var rotate = function (n) {
    var f = RNEA.rotate(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.rotate = rotate;
function elem(E) {
    return function (a, as) {
        if (as === undefined) {
            var elemE_1 = elem(E);
            return function (as) { return elemE_1(a, as); };
        }
        var predicate = function (element) { return E.equals(element, a); };
        var i = 0;
        for (; i < as.length; i++) {
            if (predicate(as[i])) {
                return true;
            }
        }
        return false;
    };
}
exports.elem = elem;
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */
var uniq = function (E) {
    var f = RNEA.uniq(E);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.uniq = uniq;
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/ReadonlyArray'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.5.0
 */
var sortBy = function (ords) {
    var f = RNEA.sortBy(ords);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.sortBy = sortBy;
/**
 * A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input
 * `ReadonlyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyArray` and produce a
 * value and the tail of the `ReadonlyArray`.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return RA.chop(as => {
 *     const { init, rest } = pipe(as, RA.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.5.0
 */
var chop = function (f) {
    var g = RNEA.chop(f);
    return function (as) { return (exports.isNonEmpty(as) ? g(as) : exports.empty); };
};
exports.chop = chop;
/**
 * Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.5.0
 */
var splitAt = function (n) { return function (as) {
    return n >= 1 && exports.isNonEmpty(as) ? RNEA.splitAt(n)(as) : exports.isEmpty(as) ? [as, exports.empty] : [exports.empty, as];
}; };
exports.splitAt = splitAt;
/**
 * Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that:
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `as`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.5.0
 */
var chunksOf = function (n) {
    var f = RNEA.chunksOf(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.empty); };
};
exports.chunksOf = chunksOf;
function comprehension(input, f, g) {
    if (g === void 0) { g = function () { return true; }; }
    var go = function (scope, input) {
        return exports.isNonEmpty(input)
            ? function_1.pipe(RNEA.head(input), exports.chain(function (x) { return go(function_1.pipe(scope, exports.append(x)), RNEA.tail(input)); }))
            : g.apply(void 0, scope) ? [f.apply(void 0, scope)]
                : exports.empty;
    };
    return go(exports.empty, input);
}
exports.comprehension = comprehension;
function union(E) {
    var unionE = RNEA.union(E);
    return function (first, second) {
        if (second === undefined) {
            var unionE_1 = union(E);
            return function (ys) { return unionE_1(ys, first); };
        }
        return exports.isNonEmpty(first) && exports.isNonEmpty(second) ? unionE(first, second) : exports.isNonEmpty(first) ? first : second;
    };
}
exports.union = union;
function intersection(E) {
    var elemE = elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var intersectionE_1 = intersection(E);
            return function (ys) { return intersectionE_1(ys, xs); };
        }
        return xs.filter(function (a) { return elemE(a, ys); });
    };
}
exports.intersection = intersection;
function difference(E) {
    var elemE = elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var differenceE_1 = difference(E);
            return function (ys) { return differenceE_1(ys, xs); };
        }
        return xs.filter(function (a) { return !elemE(a, ys); });
    };
}
exports.difference = difference;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
var _filter = function (fa, predicate) {
    return function_1.pipe(fa, exports.filter(predicate));
};
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
var _partitionWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.partitionWithIndex(predicateWithIndex)); };
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.partitionMapWithIndex(f)); };
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
var _filterMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.filterMapWithIndex(f)); };
var _filterWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.filterWithIndex(predicateWithIndex)); };
var _extend = function (fa, f) { return function_1.pipe(fa, exports.extend(f)); };
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.5.0
 */
exports.of = RNEA.of;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return exports.empty; };
exports.zero = zero;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) {
    return fa.concat(that());
}; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.5.0
 */
exports.alt = exports.altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.5.0
 */
var ap = function (fa) {
    return exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); });
};
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
var chain = function (f) { return function (ma) {
    return function_1.pipe(ma, exports.chainWithIndex(function (_, a) { return f(a); }));
}; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) { return function (fa) {
    return fa.map(function (a) { return f(a); });
}; };
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
var mapWithIndex = function (f) { return function (fa) { return fa.map(function (a, i) { return f(i, a); }); }; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Compactable
 * @since 2.5.0
 */
var separate = function (fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var e = fa_1[_i];
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filter = function (predicate) { return function (fa) { return fa.filter(predicate); }; };
exports.filter = filter;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var out = [];
    for (var i = 0; i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (O.isSome(optionB)) {
            out.push(optionB.value);
        }
    }
    return out;
}; };
exports.filterMapWithIndex = filterMapWithIndex;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filterMap = function (f) {
    return exports.filterMapWithIndex(function (_, a) { return f(a); });
};
exports.filterMap = filterMap;
/**
 * @category Compactable
 * @since 2.5.0
 */
exports.compact = 
/*#__PURE__*/
exports.filterMap(function_1.identity);
/**
 * @category Filterable
 * @since 2.5.0
 */
var partition = function (predicate) {
    return exports.partitionWithIndex(function (_, a) { return predicate(a); });
};
exports.partition = partition;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var partitionWithIndex = function (predicateWithIndex) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var a = fa[i];
        if (predicateWithIndex(i, a)) {
            right.push(a);
        }
        else {
            left.push(a);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionWithIndex = partitionWithIndex;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partitionMap = function (f) {
    return exports.partitionMapWithIndex(function (_, a) { return f(a); });
};
exports.partitionMap = partitionMap;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var e = f(i, fa[i]);
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionMapWithIndex = partitionMapWithIndex;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var filterWithIndex = function (predicateWithIndex) { return function (fa) {
    return fa.filter(function (a, i) { return predicateWithIndex(i, a); });
}; };
exports.filterWithIndex = filterWithIndex;
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (wa) { return wa.map(function (_, i) { return f(wa.slice(i)); }); }; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var foldMapWithIndex = function (M) { return function (f) { return function (fa) {
    return fa.reduce(function (b, a, i) { return M.concat(b, f(i, a)); }, M.empty);
}; }; };
exports.foldMapWithIndex = foldMapWithIndex;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return exports.reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (f) { return foldMapWithIndexM(function (_, a) { return f(a); }); };
};
exports.foldMap = foldMap;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceWithIndex = function (b, f) { return function (fa) {
    var len = fa.length;
    var out = b;
    for (var i = 0; i < len; i++) {
        out = f(i, out, fa[i]);
    }
    return out;
}; };
exports.reduceWithIndex = reduceWithIndex;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return exports.reduceRightWithIndex(b, function (_, a, b) { return f(a, b); });
};
exports.reduceRight = reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceRightWithIndex = function (b, f) { return function (fa) { return fa.reduceRight(function (b, a, i) { return f(i, a, b); }, b); }; };
exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return _reduce(ta, F.of(exports.zero()), function (fas, fa) {
        return F.ap(F.map(fas, function (as) { return function (a) { return function_1.pipe(as, exports.append(a)); }; }), fa);
    });
}; };
exports.sequence = sequence;
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) {
    return exports.reduceWithIndex(F.of(exports.zero()), function (i, fbs, a) {
        return F.ap(F.map(fbs, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, a));
    });
}; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
/**
 * @category Unfoldable
 * @since 2.6.6
 */
var unfold = function (b, f) {
    var out = [];
    var bb = b;
    while (true) {
        var mt = f(bb);
        if (O.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
        }
        else {
            break;
        }
    }
    return out;
};
exports.unfold = unfold;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyArray';
/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function (S) { return ({
    show: function (as) { return "[" + as.map(S.show).join(', ') + "]"; }
}); };
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.5.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) { return (exports.isEmpty(first) ? second : exports.isEmpty(second) ? first : first.concat(second)); }
}); };
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` for `ReadonlyArray<A>`.
 *
 * @example
 * import { getMonoid } from 'fp-ts/ReadonlyArray'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.5.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: exports.empty
}); };
exports.getMonoid = getMonoid;
/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/ReadonlyArray'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.5.0
 */
var getEq = function (E) {
    return Eq_1.fromEquals(function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return E.equals(x, ys[i]); }); });
};
exports.getEq = getEq;
/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/ReadonlyArray'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @category instances
 * @since 2.5.0
 */
var getOrd = function (O) {
    return Ord_1.fromCompare(function (a, b) {
        var aLen = a.length;
        var bLen = b.length;
        var len = Math.min(aLen, bLen);
        for (var i = 0; i < len; i++) {
            var ordering = O.compare(a[i], b[i]);
            if (ordering !== 0) {
                return ordering;
            }
        }
        return N.Ord.compare(aLen, bLen);
    });
};
exports.getOrd = getOrd;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Unfoldable = {
    URI: exports.URI,
    unfold: exports.unfold
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: exports.sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------
/**
 * @category unsafe
 * @since 2.5.0
 */
exports.unsafeInsertAt = RNEA.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeUpdateAt = function (i, a, as) {
    return exports.isNonEmpty(as) ? RNEA.unsafeUpdateAt(i, a, as) : as;
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeDeleteAt = function (i, as) {
    var xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
exports.unsafeDeleteAt = unsafeDeleteAt;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
var toArray = function (as) { return as.slice(); };
exports.toArray = toArray;
/**
 * @category interop
 * @since 2.5.0
 */
var fromArray = function (as) { return (exports.isEmpty(as) ? exports.empty : as.slice()); };
exports.fromArray = fromArray;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * An empty array
 *
 * @since 2.5.0
 */
exports.empty = RNEA.empty;
/**
 * Check if a predicate holds true for every array member.
 *
 * @example
 * import { every } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
 * assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)
 *
 * @since 2.9.0
 */
var every = function (predicate) { return function (as) { return as.every(predicate); }; };
exports.every = every;
/**
 * Check if a predicate holds true for any array member.
 *
 * @example
 * import { some } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
 * assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)
 *
 * @since 2.9.0
 */
var some = function (predicate) { return function (as) {
    return as.some(predicate);
}; };
exports.some = some;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`prepend`](#prepend) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.cons = RNEA.cons;
/**
 * Use [`append`](#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.snoc = RNEA.snoc;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyArray = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero: exports.zero,
    unfold: exports.unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};

}, function(modId) { var map = {"./Apply":1619349411471,"./Chain":1619349411475,"./Eq":1619349411481,"./function":1619349411472,"./Functor":1619349411473,"./number":1619349411485,"./Option":1619349411478,"./Ord":1619349411480,"./ReadonlyNonEmptyArray":1619349411482,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411485, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonoidProduct = exports.MonoidSum = exports.SemigroupProduct = exports.SemigroupSum = exports.Show = exports.Field = exports.Bounded = exports.Ord = exports.Eq = void 0;
/**
 * @since 2.10.0
 */
var B = __importStar(require("./Bounded"));
var E = __importStar(require("./Eq"));
var F = __importStar(require("./Field"));
var O = __importStar(require("./Ord"));
var S = __importStar(require("./Show"));
var Semigroup_1 = require("./Semigroup");
var Monoid_1 = require("./Monoid");
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Eq = E.eqNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Ord = O.ordNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Bounded = B.boundedNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Field = F.fieldNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Show = S.showNumber;
/**
 * `number` semigroup under addition.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupSum = Semigroup_1.semigroupSum;
/**
 * `number` semigroup under multiplication.
 *
 * @example
 * import { SemigroupProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupProduct = Semigroup_1.semigroupProduct;
/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @example
 * import { MonoidSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidSum = Monoid_1.monoidSum;
/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @example
 * import { MonoidProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidProduct = Monoid_1.monoidProduct;

}, function(modId) { var map = {"./Bounded":1619349411486,"./Eq":1619349411481,"./Field":1619349411487,"./Ord":1619349411480,"./Show":1619349411488,"./Semigroup":1619349411483,"./Monoid":1619349411489}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411486, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.boundedNumber = void 0;
/**
 * The `Bounded` type class represents totally ordered types that have an upper and lower boundary.
 *
 * Instances should satisfy the following law in addition to the `Ord` laws:
 *
 * - Bounded: `bottom <= a <= top`
 *
 * @since 2.0.0
 */
var Ord_1 = require("./Ord");
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Bounded`](./number.ts.html#Bounded) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.boundedNumber = {
    // tslint:disable-next-line: deprecation
    equals: Ord_1.ordNumber.equals,
    // tslint:disable-next-line: deprecation
    compare: Ord_1.ordNumber.compare,
    top: Infinity,
    bottom: -Infinity
};

}, function(modId) { var map = {"./Ord":1619349411480}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411487, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldNumber = exports.lcm = exports.gcd = void 0;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * The *greatest common divisor* of two values
 *
 * @since 2.0.0
 */
function gcd(E, field) {
    var zero = field.zero;
    var f = function (x, y) { return (E.equals(y, zero) ? x : f(y, field.mod(x, y))); };
    return f;
}
exports.gcd = gcd;
/**
 * The *least common multiple* of two values
 *
 * @since 2.0.0
 */
function lcm(E, F) {
    var zero = F.zero;
    var gcdSF = gcd(E, F);
    return function (x, y) { return (E.equals(x, zero) || E.equals(y, zero) ? zero : F.div(F.mul(x, y), gcdSF(x, y))); };
}
exports.lcm = lcm;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Field`](./number.ts.html#Field) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.fieldNumber = {
    add: function (x, y) { return x + y; },
    zero: 0,
    mul: function (x, y) { return x * y; },
    one: 1,
    sub: function (x, y) { return x - y; },
    degree: function (_) { return 1; },
    div: function (x, y) { return x / y; },
    mod: function (x, y) { return x % y; }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411488, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showNumber = exports.showString = exports.showBoolean = exports.getStructShow = exports.getTupleShow = exports.tuple = exports.struct = void 0;
/**
 * The `Show` type class represents those types which can be converted into
 * a human-readable `string` representation.
 *
 * While not required, it is recommended that for any expression `x`, the
 * string `show(x)` be executable TypeScript code which evaluates to the same
 * value as the expression `x`.
 *
 * @since 2.0.0
 */
var _ = __importStar(require("./internal"));
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function (shows) { return ({
    show: function (a) {
        var s = '{';
        for (var k in shows) {
            if (_.has.call(shows, k)) {
                s += " " + k + ": " + shows[k].show(a[k]) + ",";
            }
        }
        if (s.length > 1) {
            s = s.slice(0, -1) + ' ';
        }
        s += '}';
        return s;
    }
}); };
exports.struct = struct;
/**
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var shows = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        shows[_i] = arguments[_i];
    }
    return ({
        show: function (t) { return "[" + t.map(function (a, i) { return shows[i].show(a); }).join(', ') + "]"; }
    });
};
exports.tuple = tuple;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleShow = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructShow = exports.struct;
/**
 * Use [`Show`](./boolean.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.showBoolean = {
    show: function (a) { return JSON.stringify(a); }
};
/**
 * Use [`Show`](./string.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.showString = {
    show: function (a) { return JSON.stringify(a); }
};
/**
 * Use [`Show`](./number.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.showNumber = {
    show: function (a) { return JSON.stringify(a); }
};

}, function(modId) { var map = {"./internal":1619349411477}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411489, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.monoidProduct = exports.monoidSum = exports.monoidString = exports.getEndomorphismMonoid = exports.getFunctionMonoid = exports.monoidAny = exports.monoidAll = exports.fold = exports.getMeetMonoid = exports.getJoinMonoid = exports.getDualMonoid = exports.getStructMonoid = exports.getTupleMonoid = exports.concatAll = exports.monoidVoid = exports.tuple = exports.struct = exports.reverse = exports.max = exports.min = void 0;
var function_1 = require("./function");
var _ = __importStar(require("./internal"));
var Se = __importStar(require("./Semigroup"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a monoid where `concat` will return the minimum, based on the provided bounded order.
 *
 * The `empty` value is the `top` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.min(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function (B) { return ({
    concat: Se.min(B).concat,
    empty: B.top
}); };
exports.min = min;
/**
 * Get a monoid where `concat` will return the maximum, based on the provided bounded order.
 *
 * The `empty` value is the `bottom` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.max(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */
var max = function (B) { return ({
    concat: Se.max(B).concat,
    empty: B.bottom
}); };
exports.max = max;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Monoid`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Monoid'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Monoid).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (M) { return ({
    concat: Se.reverse(M).concat,
    empty: M.empty
}); };
exports.reverse = reverse;
/**
 * Given a struct of monoids returns a monoid for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const M = struct<Point>({
 *   x: N.MonoidSum,
 *   y: N.MonoidSum
 * })
 *
 * assert.deepStrictEqual(M.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */
var struct = function (monoids) {
    var empty = {};
    for (var k in monoids) {
        if (_.has.call(monoids, k)) {
            empty[k] = monoids[k].empty;
        }
    }
    return {
        concat: Se.struct(monoids).concat,
        empty: empty
    };
};
exports.struct = struct;
/**
 * Given a tuple of monoids returns a monoid for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Monoid'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const M1 = tuple(S.Monoid, N.MonoidSum)
 * assert.deepStrictEqual(M1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const M2 = tuple(S.Monoid, N.MonoidSum, B.MonoidAll)
 * assert.deepStrictEqual(M2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var monoids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        monoids[_i] = arguments[_i];
    }
    return ({
        concat: Se.tuple.apply(Se, monoids).concat,
        empty: monoids.map(function (m) { return m.empty; })
    });
};
exports.tuple = tuple;
/**
 * @category instances
 * @since 2.0.0
 */
exports.monoidVoid = {
    concat: Se.semigroupVoid.concat,
    empty: undefined
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the monoid `empty` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([1, 2, 3]), 6)
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([]), 0)
 *
 * @since 2.10.0
 */
var concatAll = function (M) { return Se.concatAll(M)(M.empty); };
exports.concatAll = concatAll;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleMonoid = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructMonoid = exports.struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualMonoid = exports.reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getJoinMonoid = exports.max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getMeetMonoid = exports.min;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.fold = exports.concatAll;
/**
 * Use [`MonoidAll`](./boolean.ts.html#monoidall) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidAll = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupAll.concat,
    empty: true
};
/**
 * Use [`MonoidAny`](./boolean.ts.html#MonoidAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidAny = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupAny.concat,
    empty: false
};
/**
 * Use [`getMonoid`](./function.ts.html#getMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionMonoid = function_1.getMonoid;
/**
 * Use [`getEndomorphismMonoid`](./function.ts.html#getEndomorphismMonoid) instead.
 *
 * **Note**. The execution order in [`getEndomorphismMonoid`](./function.ts.html#getEndomorphismMonoid) is reversed.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getEndomorphismMonoid = function () { return exports.reverse(function_1.getEndomorphismMonoid()); };
exports.getEndomorphismMonoid = getEndomorphismMonoid;
/**
 * Use [`Monoid`](./string.ts.html#Monoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidString = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupString.concat,
    empty: ''
};
/**
 * Use [`MonoidSum`](./number.ts.html#MonoidSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidSum = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupSum.concat,
    empty: 0
};
/**
 * Use [`MonoidProduct`](./number.ts.html#MonoidProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidProduct = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupProduct.concat,
    empty: 1
};

}, function(modId) { var map = {"./function":1619349411472,"./internal":1619349411477,"./Semigroup":1619349411483}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411490, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411491, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = exports.Ord = exports.MonoidAny = exports.MonoidAll = exports.SemigroupAny = exports.SemigroupAll = exports.BooleanAlgebra = exports.Eq = exports.fold = exports.match = exports.foldW = exports.matchW = void 0;
/**
 * @since 2.2.0
 */
var BA = __importStar(require("./BooleanAlgebra"));
var E = __importStar(require("./Eq"));
var Semigroup_1 = require("./Semigroup");
var Monoid_1 = require("./Monoid");
var O = __importStar(require("./Ord"));
var S = __importStar(require("./Show"));
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onFalse, onTrue) { return function (value) {
    return value ? onTrue() : onFalse();
}; };
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchW;
/**
 * Defines the fold over a boolean value.
 * Takes two thunks `onTrue`, `onFalse` and a `boolean` value.
 * If `value` is false, `onFalse()` is returned, otherwise `onTrue()`.
 *
 * @example
 * import { some, map } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 * import { match } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(
 *  pipe(
 *    some(true),
 *    map(match(() => 'false', () => 'true'))
 *  ),
 *  some('true')
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
exports.match = exports.foldW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.2.0
 */
exports.fold = exports.match;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Eq = E.eqBoolean;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.BooleanAlgebra = BA.booleanAlgebraBoolean;
/**
 * `boolean` semigroup under conjunction.
 *
 * @example
 * import { SemigroupAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupAll = Semigroup_1.semigroupAll;
/**
 * `boolean` semigroup under disjunction.
 *
 * @example
 * import { SemigroupAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
 * assert.deepStrictEqual(SemigroupAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupAny = Semigroup_1.semigroupAny;
/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @example
 * import { MonoidAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAll.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidAll = Monoid_1.monoidAll;
/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @example
 * import { MonoidAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAny.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAny.concat(true, false), true)
 * assert.deepStrictEqual(MonoidAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidAny = Monoid_1.monoidAny;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Ord = O.ordBoolean;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Show = S.showBoolean;

}, function(modId) { var map = {"./BooleanAlgebra":1619349411492,"./Eq":1619349411481,"./Semigroup":1619349411483,"./Monoid":1619349411489,"./Ord":1619349411480,"./Show":1619349411488}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411492, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionBooleanAlgebra = exports.booleanAlgebraBoolean = exports.getDualBooleanAlgebra = exports.booleanAlgebraVoid = exports.reverse = void 0;
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (B) { return ({
    meet: function (x, y) { return B.join(x, y); },
    join: function (x, y) { return B.meet(x, y); },
    zero: B.one,
    one: B.zero,
    implies: function (x, y) { return B.join(B.not(x), y); },
    not: B.not
}); };
exports.reverse = reverse;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.booleanAlgebraVoid = {
    meet: function () { return undefined; },
    join: function () { return undefined; },
    zero: undefined,
    one: undefined,
    implies: function () { return undefined; },
    not: function () { return undefined; }
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualBooleanAlgebra = exports.reverse;
/**
 * Use [`BooleanAlgebra`](./boolean.ts.html#BooleanAlgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.booleanAlgebraBoolean = {
    meet: function (x, y) { return x && y; },
    join: function (x, y) { return x || y; },
    zero: false,
    one: true,
    implies: function (x, y) { return !x || y; },
    not: function (x) { return !x; }
};
/**
 * Use [`getBooleanAlgebra`](./function.ts.html#getBooleanAlgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionBooleanAlgebra = function_1.getBooleanAlgebra;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411493, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinMaxBoundedDistributiveLattice = void 0;
var DistributiveLattice_1 = require("./DistributiveLattice");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
function getMinMaxBoundedDistributiveLattice(O) {
    var L = DistributiveLattice_1.getMinMaxDistributiveLattice(O);
    return function (min, max) { return ({
        join: L.join,
        meet: L.meet,
        zero: min,
        one: max
    }); };
}
exports.getMinMaxBoundedDistributiveLattice = getMinMaxBoundedDistributiveLattice;

}, function(modId) { var map = {"./DistributiveLattice":1619349411494}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411494, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinMaxDistributiveLattice = void 0;
var Ord_1 = require("./Ord");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
function getMinMaxDistributiveLattice(O) {
    return {
        meet: Ord_1.min(O),
        join: Ord_1.max(O)
    };
}
exports.getMinMaxDistributiveLattice = getMinMaxDistributiveLattice;

}, function(modId) { var map = {"./Ord":1619349411480}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411495, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411496, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411497, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411498, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411499, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.tailRec = void 0;
/**
 * @since 2.0.0
 */
var tailRec = function (startWith, f) {
    var ab = f(startWith);
    while (ab._tag === 'Left') {
        ab = f(ab.left);
    }
    return ab.right;
};
exports.tailRec = tailRec;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411500, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.fanin = exports.splitChoice = exports.fanIn = exports.split = void 0;
var function_1 = require("./function");
function split(P, C) {
    return function (pab, pcd) { return C.compose(P.right(pcd), P.left(pab)); };
}
exports.split = split;
function fanIn(P, C) {
    var splitPC = split(P, C);
    return function (pac, pbc) {
        return C.compose(P.promap(C.id(), function (cc) { return (cc._tag === 'Left' ? cc.left : cc.right); }, function_1.identity), splitPC(pac, pbc));
    };
}
exports.fanIn = fanIn;
function splitChoice(F) {
    return split(F, F);
}
exports.splitChoice = splitChoice;
function fanin(F) {
    return fanIn(F, F);
}
exports.fanin = fanin;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411501, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411502, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompactableComposition = exports.separate = exports.compact = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Option_1 = require("./Option");
var S = __importStar(require("./Separated"));
function compact(F, G) {
    return function (fga) { return F.map(fga, G.compact); };
}
exports.compact = compact;
function separate(F, C, G) {
    var _compact = compact(F, C);
    var _map = Functor_1.map(F, G);
    return function (fge) { return S.separated(_compact(function_1.pipe(fge, _map(Option_1.getLeft))), _compact(function_1.pipe(fge, _map(Option_1.getRight)))); };
}
exports.separate = separate;
/** @deprecated */
function getCompactableComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    return {
        map: map,
        compact: compact(F, G),
        separate: separate(F, G, G)
    };
}
exports.getCompactableComposition = getCompactableComposition;

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411503, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.error = exports.warn = exports.log = void 0;
/**
 * @since 2.0.0
 */
var log = function (a) { return function () { return console.log(a); }; }; // tslint:disable-line:no-console
exports.log = log;
/**
 * @since 2.0.0
 */
var warn = function (a) { return function () { return console.warn(a); }; }; // tslint:disable-line:no-console
exports.warn = warn;
/**
 * @since 2.0.0
 */
var error = function (a) { return function () { return console.error(a); }; }; // tslint:disable-line:no-console
exports.error = error;
/**
 * @since 2.0.0
 */
var info = function (a) { return function () { return console.info(a); }; }; // tslint:disable-line:no-console
exports.info = info;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411504, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.const_ = exports.Bifunctor = exports.Contravariant = exports.flap = exports.Functor = exports.URI = exports.mapLeft = exports.bimap = exports.map = exports.contramap = exports.getApplicative = exports.getApply = exports.getBooleanAlgebra = exports.getHeytingAlgebra = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBounded = exports.getOrd = exports.getEq = exports.getShow = exports.make = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
/**
 * @category constructors
 * @since 2.0.0
 */
exports.make = function_1.unsafeCoerce;
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(S) {
    return {
        show: function (c) { return "make(" + S.show(c) + ")"; }
    };
}
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.0.0
 */
exports.getEq = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getOrd = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getBounded = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getSemigroup = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getMonoid = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getSemiring = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getRing = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getHeytingAlgebra = function_1.identity;
/**
 * @category instances
 * @since 2.6.0
 */
exports.getBooleanAlgebra = function_1.identity;
/**
 * @category instances
 * @since 2.0.0
 */
function getApply(S) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return exports.make(S.concat(fab, fa)); }
    };
}
exports.getApply = getApply;
/**
 * @category instances
 * @since 2.0.0
 */
function getApplicative(M) {
    var A = getApply(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        of: function () { return exports.make(M.empty); }
    };
}
exports.getApplicative = getApplicative;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _contramap = function (fa, f) { return function_1.pipe(fa, exports.contramap(f)); };
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function () { return function_1.unsafeCoerce; };
exports.contramap = contramap;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function () { return function_1.unsafeCoerce; };
exports.map = map;
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */
var bimap = function (f) { return function (fa) {
    return exports.make(f(fa));
}; };
exports.bimap = bimap;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */
var mapLeft = function (f) { return function (fa) { return exports.make(f(fa)); }; };
exports.mapLeft = mapLeft;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Const';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Contravariant = {
    URI: exports.URI,
    contramap: _contramap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.const_ = {
    URI: exports.URI,
    map: _map,
    contramap: _contramap,
    bimap: _bimap,
    mapLeft: _mapLeft
};

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411505, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411506, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = exports.create = exports.Ord = exports.eqYear = exports.eqMonth = exports.eqDate = exports.Eq = void 0;
/**
 * @since 2.0.0
 */
var E = __importStar(require("./Eq"));
var O = __importStar(require("./Ord"));
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Eq = E.eqDate;
/**
 * @category instances
 * @since 2.6.0
 */
exports.eqDate = {
    equals: function (x, y) { return x.getDate() === y.getDate(); }
};
/**
 * @category instances
 * @since 2.6.0
 */
exports.eqMonth = {
    equals: function (x, y) { return x.getMonth() === y.getMonth(); }
};
/**
 * @category instances
 * @since 2.6.0
 */
exports.eqYear = {
    equals: function (x, y) { return x.getFullYear() === y.getFullYear(); }
};
/**
 * @example
 * import { Ord } from 'fp-ts/Date'
 *
 * assert.deepStrictEqual(Ord.compare(new Date(1, 1, 2020), new Date(1, 1, 2021)), -1)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Ord = O.ordDate;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Returns the current `Date`
 *
 * @category constructors
 * @since 2.0.0
 */
var create = function () { return new Date(); };
exports.create = create;
/**
 * Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 *
 * @since 2.0.0
 */
var now = function () { return new Date().getTime(); };
exports.now = now;

}, function(modId) { var map = {"./Eq":1619349411481,"./Ord":1619349411480}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411507, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterable = exports.getCompactable = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.throwError = exports.sequence = exports.traverse = exports.reduceRight = exports.foldMap = exports.reduce = exports.duplicate = exports.extend = exports.alt = exports.altW = exports.flatten = exports.chain = exports.chainW = exports.of = exports.ap = exports.apW = exports.mapLeft = exports.bimap = exports.map = exports.filterOrElse = exports.filterOrElseW = exports.orElse = exports.orElseW = exports.swap = exports.chainOptionK = exports.fromOptionK = exports.toUnion = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.fromPredicate = exports.fromOption = exports.right = exports.left = exports.isRight = exports.isLeft = void 0;
exports.getValidation = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.either = exports.stringifyJSON = exports.parseJSON = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toError = exports.FromEither = exports.MonadThrow = exports.ChainRec = exports.Extend = exports.Alt = exports.Bifunctor = exports.Traversable = exports.Foldable = exports.chainFirstW = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getAltValidation = exports.getApplicativeValidation = exports.getWitherable = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var ChainRec_1 = require("./ChainRec");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var _ = __importStar(require("./internal"));
var Separated_1 = require("./Separated");
// -------------------------------------------------------------------------------------
// guards
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @category guards
 * @since 2.0.0
 */
exports.isLeft = _.isLeft;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @category guards
 * @since 2.0.0
 */
var isRight = function (ma) { return ma._tag === 'Right'; };
exports.isRight = isRight;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var left = function (e) { return ({ _tag: 'Left', left: e }); };
exports.left = left;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var right = function (a) { return ({ _tag: 'Right', right: a }); };
exports.right = right;
/**
 * @example
 * import { fromOption, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     some(1),
 *     fromOption(() => 'error')
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     none,
 *     fromOption(() => 'error')
 *   ),
 *   left('error')
 * )
 *
 * @category constructors
 * @since 2.0.0
 */
var fromOption = function (onNone) { return function (ma) {
    return ma._tag === 'None' ? exports.left(onNone()) : exports.right(ma.value);
}; };
exports.fromOption = fromOption;
/**
 * @example
 * import { fromPredicate, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     -1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('error')
 * )
 *
 * @category constructors
 * @since 2.0.0
 */
var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? exports.right(a) : exports.left(onFalse(a))); }; };
exports.fromPredicate = fromPredicate;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onLeft, onRight) { return function (ma) {
    return exports.isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
}; };
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchww).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchW;
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { match, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     match(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     match(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
exports.match = exports.matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
var getOrElseW = function (onLeft) { return function (ma) {
    return exports.isLeft(ma) ? onLeft(ma.left) : ma.right;
}; };
exports.getOrElseW = getOrElseW;
/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @example
 * import { getOrElse, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('error'),
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = exports.getOrElseW;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
// TODO: make lazy in v3
/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @category interop
 * @since 2.0.0
 */
var fromNullable = function (e) { return function (a) {
    return a == null ? exports.left(e) : exports.right(a);
}; };
exports.fromNullable = fromNullable;
/**
 * Constructs a new `Either` from a function that might throw.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
 *   E.tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 *
 * assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), E.right(1))
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f, onThrow) {
    try {
        return exports.right(f());
    }
    catch (e) {
        return exports.left(onThrow(e));
    }
};
exports.tryCatch = tryCatch;
/**
 * Converts a function that may throw to one returning a `Either`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f, onThrow) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.tryCatch(function () { return f.apply(void 0, a); }, onThrow);
}; };
exports.tryCatchK = tryCatchK;
/**
 * @category interop
 * @since 2.9.0
 */
var fromNullableK = function (e) {
    var from = exports.fromNullable(e);
    return function (f) { return function_1.flow(f, from); };
};
exports.fromNullableK = fromNullableK;
/**
 * @category interop
 * @since 2.9.0
 */
var chainNullableK = function (e) {
    var from = exports.fromNullableK(e);
    return function (f) { return exports.chain(from(f)); };
};
exports.chainNullableK = chainNullableK;
/**
 * @category interop
 * @since 2.10.0
 */
exports.toUnion = 
/*#__PURE__*/
exports.foldW(function_1.identity, function_1.identity);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var fromOptionK = function (onNone) {
    var from = exports.fromOption(onNone);
    return function (f) { return function_1.flow(f, from); };
};
exports.fromOptionK = fromOptionK;
/**
 * @category combinators
 * @since 2.10.0
 */
var chainOptionK = function (onNone) {
    var from = exports.fromOptionK(onNone);
    return function (f) { return exports.chain(from(f)); };
};
exports.chainOptionK = chainOptionK;
/**
 * Returns a `Right` if is a `Left` (and vice versa).
 *
 * @category combinators
 * @since 2.0.0
 */
function swap(ma) {
    return exports.isLeft(ma) ? exports.right(ma.left) : exports.left(ma.right);
}
exports.swap = swap;
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
var orElseW = function (onLeft) { return function (ma) {
    return exports.isLeft(ma) ? onLeft(ma.left) : ma;
}; };
exports.orElseW = orElseW;
/**
 * Useful for recovering from errors.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.orElse = exports.orElseW;
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
var filterOrElseW = function (predicate, onFalse) {
    return exports.chainW(function (a) { return (predicate(a) ? exports.right(a) : exports.left(onFalse(a))); });
};
exports.filterOrElseW = filterOrElseW;
/**
 * @example
 * import { filterOrElse as filterOrElse, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     right(-1),
 *     filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('error')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('a'),
 *     filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('a')
 * )
 *
 * @category combinators
 * @since 2.0.0
 */
exports.filterOrElse = exports.filterOrElseW;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) { return function (fa, f) {
    var foldMapM = exports.foldMap(M);
    return function_1.pipe(fa, foldMapM(f));
}; };
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
var _chainRec = function (a, f) {
    return ChainRec_1.tailRec(f(a), function (e) {
        return exports.isLeft(e) ? exports.right(exports.left(e.left)) : exports.isLeft(e.right) ? exports.left(f(e.right.left)) : exports.right(exports.right(e.right.right));
    });
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) {
    return exports.isLeft(fa) ? fa : exports.right(f(fa.right));
}; };
exports.map = map;
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var bimap = function (f, g) { return function (fa) { return (exports.isLeft(fa) ? exports.left(f(fa.left)) : exports.right(g(fa.right))); }; };
exports.bimap = bimap;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var mapLeft = function (f) { return function (fa) {
    return exports.isLeft(fa) ? exports.left(f(fa.left)) : fa;
}; };
exports.mapLeft = mapLeft;
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
var apW = function (fa) { return function (fab) { return (exports.isLeft(fab) ? fab : exports.isLeft(fa) ? fa : exports.right(fab.right(fa.right))); }; };
exports.apW = apW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = exports.apW;
/**
 * @category Pointed
 * @since 2.7.0
 */
exports.of = exports.right;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
var chainW = function (f) { return function (ma) {
    return exports.isLeft(ma) ? ma : f(ma.right);
}; };
exports.chainW = chainW;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = exports.chainW;
/**
 * The `flatten` function is the conventional monad join operator. It is used to remove one level of monadic structure, projecting its bound argument into the outer level.
 *
 * Derivable from `Chain`.
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(E.flatten(E.right(E.right('a'))), E.right('a'))
 * assert.deepStrictEqual(E.flatten(E.right(E.left('e'))), E.left('e'))
 * assert.deepStrictEqual(E.flatten(E.left('e')), E.left('e'))
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) { return (exports.isLeft(fa) ? that() : fa); }; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = exports.altW;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return exports.isLeft(wa) ? wa : exports.right(f(wa));
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Left-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'prefix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduce(startWith, concat)),
 *   'prefix:a'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduce(startWith, concat)),
 *   'prefix'
 * )
 *
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    return exports.isLeft(fa) ? b : f(b, fa.right);
}; };
exports.reduce = reduce;
/**
 * Map each element of the structure to a monoid, and combine the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as S from 'fp-ts/string'
 *
 * const yell = (a: string) => `${a}!`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.foldMap(S.Monoid)(yell)),
 *   'a!'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.foldMap(S.Monoid)(yell)),
 *   S.Monoid.empty
 * )
 *
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) { return function (fa) {
    return exports.isLeft(fa) ? M.empty : f(fa.right);
}; }; };
exports.foldMap = foldMap;
/**
 * Right-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'postfix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduceRight(startWith, concat)),
 *   'a:postfix'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduceRight(startWith, concat)),
 *   'postfix'
 * )
 *
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return exports.isLeft(fa) ? b : f(fa.right, b);
}; };
exports.reduceRight = reduceRight;
/**
 * Map each element of a structure to an action, evaluate these actions from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(['a']), E.traverse(O.Applicative)(RA.head)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right([]), E.traverse(O.Applicative)(RA.head)),
 *   O.none
 * )
 *
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) { return (exports.isLeft(ta) ? F.of(exports.left(ta.left)) : F.map(f(ta.right), exports.right)); }; }; };
exports.traverse = traverse;
/**
 * Evaluate each monadic action in the structure from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.some('a')), E.sequence(O.Applicative)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.none), E.sequence(O.Applicative)),
 *   O.none
 * )
 *
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ma) {
    return exports.isLeft(ma) ? F.of(exports.left(ma.left)) : F.map(ma.right, exports.right);
}; };
exports.sequence = sequence;
/**
 * @category MonadThrow
 * @since 2.6.3
 */
exports.throwError = exports.left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Either';
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(SE, SA) {
    return {
        show: function (ma) { return (exports.isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")"); }
    };
}
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.0.0
 */
function getEq(EL, EA) {
    return {
        equals: function (x, y) {
            return x === y || (exports.isLeft(x) ? exports.isLeft(y) && EL.equals(x.left, y.left) : exports.isRight(y) && EA.equals(x.right, y.right));
        }
    };
}
exports.getEq = getEq;
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/Either'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const S = getSemigroup<string, number>(SemigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 * @category instances
 * @since 2.0.0
 */
function getSemigroup(S) {
    return {
        concat: function (x, y) { return (exports.isLeft(y) ? x : exports.isLeft(x) ? y : exports.right(S.concat(x.right, y.right))); }
    };
}
exports.getSemigroup = getSemigroup;
/**
 * Builds a `Compactable` instance for `Either` given `Monoid` for the left side.
 *
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function (M) {
    var empty = exports.left(M.empty);
    return {
        URI: exports.URI,
        _E: undefined,
        compact: function (ma) { return (exports.isLeft(ma) ? ma : ma.right._tag === 'None' ? empty : exports.right(ma.right.value)); },
        separate: function (ma) {
            return exports.isLeft(ma)
                ? Separated_1.separated(ma, ma)
                : exports.isLeft(ma.right)
                    ? Separated_1.separated(exports.right(ma.right.left), empty)
                    : Separated_1.separated(empty, exports.right(ma.right.right));
        }
    };
};
exports.getCompactable = getCompactable;
/**
 * Builds a `Filterable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.10.0
 */
function getFilterable(M) {
    var empty = exports.left(M.empty);
    var _a = exports.getCompactable(M), compact = _a.compact, separate = _a.separate;
    var filter = function (ma, predicate) {
        return exports.isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
    };
    var partition = function (ma, p) {
        return exports.isLeft(ma)
            ? Separated_1.separated(ma, ma)
            : p(ma.right)
                ? Separated_1.separated(empty, exports.right(ma.right))
                : Separated_1.separated(exports.right(ma.right), empty);
    };
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: compact,
        separate: separate,
        filter: filter,
        filterMap: function (ma, f) {
            if (exports.isLeft(ma)) {
                return ma;
            }
            var ob = f(ma.right);
            return ob._tag === 'None' ? empty : exports.right(ob.value);
        },
        partition: partition,
        partitionMap: function (ma, f) {
            if (exports.isLeft(ma)) {
                return Separated_1.separated(ma, ma);
            }
            var e = f(ma.right);
            return exports.isLeft(e) ? Separated_1.separated(exports.right(e.left), empty) : Separated_1.separated(empty, exports.right(e.right));
        }
    };
}
exports.getFilterable = getFilterable;
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.0.0
 */
function getWitherable(M) {
    var F_ = getFilterable(M);
    var wither = function (F) {
        var traverseF = _traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), F_.compact); };
    };
    var wilt = function (F) {
        var traverseF = _traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), F_.separate); };
    };
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: F_.compact,
        separate: F_.separate,
        filter: F_.filter,
        filterMap: F_.filterMap,
        partition: F_.partition,
        partitionMap: F_.partitionMap,
        traverse: _traverse,
        sequence: exports.sequence,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        wither: wither,
        wilt: wilt
    };
}
exports.getWitherable = getWitherable;
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeValidation(SE) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) {
            return exports.isLeft(fab)
                ? exports.isLeft(fa)
                    ? exports.left(SE.concat(fab.left, fa.left))
                    : fab
                : exports.isLeft(fa)
                    ? fa
                    : exports.right(fab.right(fa.right));
        },
        of: exports.of
    };
}
exports.getApplicativeValidation = getApplicativeValidation;
/**
 * @category instances
 * @since 2.7.0
 */
function getAltValidation(SE) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        alt: function (me, that) {
            if (exports.isRight(me)) {
                return me;
            }
            var ea = that();
            return exports.isLeft(ea) ? exports.left(SE.concat(me.left, ea.left)) : ea;
        }
    };
}
exports.getAltValidation = getAltValidation;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst)
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
exports.chainFirstW = exports.chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ChainRec = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain,
    chainRec: _chainRec
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: function_1.identity
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */
function toError(e) {
    return e instanceof Error ? e : new Error(String(e));
}
exports.toError = toError;
/**
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (exports.isLeft(ma) ? false : E.equals(a, ma.right)); };
}
exports.elem = elem;
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (exports.isLeft(ma) ? false : predicate(ma.right)); };
}
exports.exists = exists;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        var e = f(i, as[i]);
        if (exports.isLeft(e)) {
            return e;
        }
        out.push(e.right);
    }
    return exports.right(out);
}; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Use [`parse`](./Json.ts.html#parse) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
function parseJSON(s, onError) {
    return exports.tryCatch(function () { return JSON.parse(s); }, onError);
}
exports.parseJSON = parseJSON;
/**
 * Use [`stringify`](./Json.ts.html#stringify) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var stringifyJSON = function (u, onError) {
    return exports.tryCatch(function () {
        var s = JSON.stringify(u);
        if (typeof s !== 'string') {
            throw new Error('Converting unsupported structure to JSON');
        }
        return s;
    }, onError);
};
exports.stringifyJSON = stringifyJSON;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.either = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    extend: _extend,
    chainRec: _chainRec,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getValidationSemigroup = function (SE, SA) {
    return Apply_1.getApplySemigroup(getApplicativeValidation(SE))(SA);
};
exports.getValidationSemigroup = getValidationSemigroup;
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getValidationMonoid = function (SE, MA) {
    return Applicative_1.getApplicativeMonoid(getApplicativeValidation(SE))(MA);
};
exports.getValidationMonoid = getValidationMonoid;
/**
 * Use [`getApplicativeValidation`](#getapplicativevalidation) and [`getAltValidation`](#getaltvalidation) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
function getValidation(SE) {
    var ap = getApplicativeValidation(SE).ap;
    var alt = getAltValidation(SE).alt;
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        of: exports.of,
        chain: _chain,
        bimap: _bimap,
        mapLeft: _mapLeft,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        extend: _extend,
        traverse: _traverse,
        sequence: exports.sequence,
        chainRec: _chainRec,
        throwError: exports.throwError,
        ap: ap,
        alt: alt
    };
}
exports.getValidation = getValidation;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./ChainRec":1619349411499,"./function":1619349411472,"./Functor":1619349411473,"./internal":1619349411477,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411508, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEitherM = exports.toUnion = exports.swap = exports.orElse = exports.getOrElse = exports.matchE = exports.match = exports.altValidation = exports.mapLeft = exports.bimap = exports.alt = exports.chain = exports.ap = exports.map = exports.leftF = exports.rightF = exports.left = exports.right = void 0;
var Apply_1 = require("./Apply");
var E = __importStar(require("./Either"));
var function_1 = require("./function");
var Functor_1 = require("./Functor");
function right(F) {
    return function_1.flow(E.right, F.of);
}
exports.right = right;
function left(F) {
    return function_1.flow(E.left, F.of);
}
exports.left = left;
function rightF(F) {
    return function (fa) { return F.map(fa, E.right); };
}
exports.rightF = rightF;
function leftF(F) {
    return function (fe) { return F.map(fe, E.left); };
}
exports.leftF = leftF;
function map(F) {
    return Functor_1.map(F, E.Functor);
}
exports.map = map;
function ap(F) {
    return Apply_1.ap(F, E.Apply);
}
exports.ap = ap;
function chain(M) {
    return function (f) { return function (ma) { return M.chain(ma, function (e) { return (E.isLeft(e) ? M.of(e) : f(e.right)); }); }; };
}
exports.chain = chain;
function alt(M) {
    return function (second) { return function (first) { return M.chain(first, function (e) { return (E.isLeft(e) ? second() : M.of(e)); }); }; };
}
exports.alt = alt;
function bimap(F) {
    return function (f, g) { return function (fea) { return F.map(fea, E.bimap(f, g)); }; };
}
exports.bimap = bimap;
function mapLeft(F) {
    return function (f) { return function (fea) { return F.map(fea, E.mapLeft(f)); }; };
}
exports.mapLeft = mapLeft;
function altValidation(M, S) {
    return function (second) { return function (first) {
        return M.chain(first, E.match(function (e1) {
            return M.map(second(), E.mapLeft(function (e2) { return S.concat(e1, e2); }));
        }, right(M)));
    }; };
}
exports.altValidation = altValidation;
function match(F) {
    return function (onLeft, onRight) { return function (ma) { return F.map(ma, E.match(onLeft, onRight)); }; };
}
exports.match = match;
function matchE(M) {
    return function (onLeft, onRight) { return function (ma) { return M.chain(ma, E.match(onLeft, onRight)); }; };
}
exports.matchE = matchE;
function getOrElse(M) {
    return function (onLeft) { return function (ma) { return M.chain(ma, E.match(onLeft, M.of)); }; };
}
exports.getOrElse = getOrElse;
function orElse(M) {
    return function (onLeft) { return function (ma) { return M.chain(ma, function (e) { return (E.isLeft(e) ? onLeft(e.left) : M.of(e)); }); }; };
}
exports.orElse = orElse;
function swap(F) {
    return function (ma) { return F.map(ma, E.swap); };
}
exports.swap = swap;
function toUnion(F) {
    return function (fa) { return F.map(fa, E.toUnion); };
}
exports.toUnion = toUnion;
/** @deprecated  */
/* istanbul ignore next */
function getEitherM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    var _alt = alt(M);
    var _bimap = bimap(M);
    var _mapLeft = mapLeft(M);
    var _fold = matchE(M);
    var _getOrElse = getOrElse(M);
    var _orElse = orElse(M);
    return {
        map: function (fa, f) { return function_1.pipe(fa, _map(f)); },
        ap: function (fab, fa) { return function_1.pipe(fab, _ap(fa)); },
        of: right(M),
        chain: function (ma, f) { return function_1.pipe(ma, _chain(f)); },
        alt: function (fa, that) { return function_1.pipe(fa, _alt(that)); },
        bimap: function (fea, f, g) { return function_1.pipe(fea, _bimap(f, g)); },
        mapLeft: function (fea, f) { return function_1.pipe(fea, _mapLeft(f)); },
        fold: function (fa, onLeft, onRight) { return function_1.pipe(fa, _fold(onLeft, onRight)); },
        getOrElse: function (fa, onLeft) { return function_1.pipe(fa, _getOrElse(onLeft)); },
        orElse: function (fa, f) { return function_1.pipe(fa, _orElse(f)); },
        swap: swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: left(M)
    };
}
exports.getEitherM = getEitherM;

}, function(modId) { var map = {"./Apply":1619349411471,"./Either":1619349411507,"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411509, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411510, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterableComposition = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = void 0;
/**
 * `Filterable` represents data structures which can be _partitioned_/_filtered_.
 *
 * Adapted from https://github.com/LiamGoodacre/purescript-filterable/blob/master/src/Data/Filterable.purs
 *
 * @since 2.0.0
 */
var Compactable_1 = require("./Compactable");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Option_1 = require("./Option");
var Separated_1 = require("./Separated");
function filter(F, G) {
    return function (predicate) { return function (fga) { return F.map(fga, function (ga) { return G.filter(ga, predicate); }); }; };
}
exports.filter = filter;
function filterMap(F, G) {
    return function (f) { return function (fga) { return F.map(fga, function (ga) { return G.filterMap(ga, f); }); }; };
}
exports.filterMap = filterMap;
function partition(F, G) {
    var _filter = filter(F, G);
    return function (predicate) { return function (fga) {
        return Separated_1.separated(function_1.pipe(fga, _filter(function (a) { return !predicate(a); })), function_1.pipe(fga, _filter(predicate)));
    }; };
}
exports.partition = partition;
function partitionMap(F, G) {
    var _filterMap = filterMap(F, G);
    return function (f) { return function (fga) {
        return Separated_1.separated(function_1.pipe(fga, _filterMap(function (a) { return Option_1.getLeft(f(a)); })), function_1.pipe(fga, _filterMap(function (a) { return Option_1.getRight(f(a)); })));
    }; };
}
exports.partitionMap = partitionMap;
/** @deprecated */
function getFilterableComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    var _compact = Compactable_1.compact(F, G);
    var _separate = Compactable_1.separate(F, G, G);
    var _filter = filter(F, G);
    var _filterMap = filterMap(F, G);
    var _partition = partition(F, G);
    var _partitionMap = partitionMap(F, G);
    return {
        map: map,
        compact: _compact,
        separate: _separate,
        filter: function (fga, f) { return function_1.pipe(fga, _filter(f)); },
        filterMap: function (fga, f) { return function_1.pipe(fga, _filterMap(f)); },
        partition: function (fga, p) { return function_1.pipe(fga, _partition(p)); },
        partitionMap: function (fga, f) { return function_1.pipe(fga, _partitionMap(f)); }
    };
}
exports.getFilterableComposition = getFilterableComposition;

}, function(modId) { var map = {"./Compactable":1619349411502,"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411511, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411512, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoldableComposition = exports.toArray = exports.foldM = exports.traverse_ = exports.toReadonlyArray = exports.intercalate = exports.reduceM = exports.reduceRight = exports.foldMap = exports.reduce = void 0;
var function_1 = require("./function");
function reduce(F, G) {
    return function (b, f) { return function (fga) { return F.reduce(fga, b, function (b, ga) { return G.reduce(ga, b, f); }); }; };
}
exports.reduce = reduce;
function foldMap(F, G) {
    return function (M) {
        var foldMapF = F.foldMap(M);
        var foldMapG = G.foldMap(M);
        return function (f) { return function (fga) { return foldMapF(fga, function (ga) { return foldMapG(ga, f); }); }; };
    };
}
exports.foldMap = foldMap;
function reduceRight(F, G) {
    return function (b, f) { return function (fga) { return F.reduceRight(fga, b, function (ga, b) { return G.reduceRight(ga, b, f); }); }; };
}
exports.reduceRight = reduceRight;
function reduceM(M, F) {
    return function (b, f) { return function (fa) { return F.reduce(fa, M.of(b), function (mb, a) { return M.chain(mb, function (b) { return f(b, a); }); }); }; };
}
exports.reduceM = reduceM;
function intercalate(M, F) {
    return function (sep, fm) {
        var go = function (_a, x) {
            var init = _a.init, acc = _a.acc;
            return init ? { init: false, acc: x } : { init: false, acc: M.concat(M.concat(acc, sep), x) };
        };
        return F.reduce(fm, { init: true, acc: M.empty }, go).acc;
    };
}
exports.intercalate = intercalate;
function toReadonlyArray(F) {
    return function (fa) {
        return F.reduce(fa, [], function (acc, a) {
            acc.push(a);
            return acc;
        });
    };
}
exports.toReadonlyArray = toReadonlyArray;
function traverse_(M, F) {
    var applyFirst = function (mu, mb) { return M.ap(M.map(mu, function_1.constant), mb); };
    var mu = M.of(undefined);
    return function (fa, f) { return F.reduce(fa, mu, function (mu, a) { return applyFirst(mu, f(a)); }); };
}
exports.traverse_ = traverse_;
function foldM(M, F) {
    return function (fa, b, f) { return F.reduce(fa, M.of(b), function (mb, a) { return M.chain(mb, function (b) { return f(b, a); }); }); };
}
exports.foldM = foldM;
/**
 * Use [`toReadonlyArray`](#toreadonlyarray) instead
 *
 * @since 2.8.0
 * @deprecated
 */
exports.toArray = toReadonlyArray;
/** @deprecated */
function getFoldableComposition(F, G) {
    var _reduce = reduce(F, G);
    var _foldMap = foldMap(F, G);
    var _reduceRight = reduceRight(F, G);
    return {
        reduce: function (fga, b, f) { return function_1.pipe(fga, _reduce(b, f)); },
        foldMap: function (M) {
            var foldMapM = _foldMap(M);
            return function (fga, f) { return function_1.pipe(fga, foldMapM(f)); };
        },
        reduceRight: function (fga, b, f) { return function_1.pipe(fga, _reduceRight(b, f)); }
    };
}
exports.getFoldableComposition = getFoldableComposition;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411513, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoldableWithIndexComposition = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = void 0;
/**
 * A `Foldable` with an additional index.
 * A `FoldableWithIndex` instance must be compatible with its `Foldable` instance
 *
 * ```ts
 * reduce(fa, b, f) = reduceWithIndex(fa, b, (_, b, a) => f(b, a))
 * foldMap(M)(fa, f) = foldMapWithIndex(M)(fa, (_, a) => f(a))
 * reduceRight(fa, b, f) = reduceRightWithIndex(fa, b, (_, a, b) => f(a, b))
 * ```
 *
 * @since 2.0.0
 */
var Foldable_1 = require("./Foldable");
var function_1 = require("./function");
function reduceWithIndex(F, G) {
    return function (b, f) { return function (fga) {
        return F.reduceWithIndex(fga, b, function (i, b, ga) { return G.reduceWithIndex(ga, b, function (j, b, a) { return f([i, j], b, a); }); });
    }; };
}
exports.reduceWithIndex = reduceWithIndex;
function foldMapWithIndex(F, G) {
    return function (M) {
        var foldMapWithIndexF = F.foldMapWithIndex(M);
        var foldMapWithIndexG = G.foldMapWithIndex(M);
        return function (f) { return function (fga) { return foldMapWithIndexF(fga, function (i, ga) { return foldMapWithIndexG(ga, function (j, a) { return f([i, j], a); }); }); }; };
    };
}
exports.foldMapWithIndex = foldMapWithIndex;
function reduceRightWithIndex(F, G) {
    return function (b, f) { return function (fga) {
        return F.reduceRightWithIndex(fga, b, function (i, ga, b) { return G.reduceRightWithIndex(ga, b, function (j, a, b) { return f([i, j], a, b); }); });
    }; };
}
exports.reduceRightWithIndex = reduceRightWithIndex;
/** @deprecated */
function getFoldableWithIndexComposition(F, G) {
    var FC = Foldable_1.getFoldableComposition(F, G);
    var _reduceWithIndex = reduceWithIndex(F, G);
    var _foldMapWithIndex = foldMapWithIndex(F, G);
    var _reduceRightWithIndex = reduceRightWithIndex(F, G);
    return {
        reduce: FC.reduce,
        foldMap: FC.foldMap,
        reduceRight: FC.reduceRight,
        reduceWithIndex: function (fga, b, f) { return function_1.pipe(fga, _reduceWithIndex(b, f)); },
        foldMapWithIndex: function (M) {
            var foldMapWithIndexM = _foldMapWithIndex(M);
            return function (fga, f) { return function_1.pipe(fga, foldMapWithIndexM(f)); };
        },
        reduceRightWithIndex: function (fga, b, f) { return function_1.pipe(fga, _reduceRightWithIndex(b, f)); }
    };
}
exports.getFoldableWithIndexComposition = getFoldableWithIndexComposition;

}, function(modId) { var map = {"./Foldable":1619349411512,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411514, function(require, module, exports) {

/**
 * The `FromEither` type class represents those data types which support errors.
 *
 * @since 2.10.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOrElse = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = void 0;
var E = __importStar(require("./Either"));
var function_1 = require("./function");
function fromOption(F) {
    return function (onNone) { return function_1.flow(E.fromOption(onNone), F.fromEither); };
}
exports.fromOption = fromOption;
function fromPredicate(F) {
    return function (predicate, onFalse) {
        return function_1.flow(E.fromPredicate(predicate, onFalse), F.fromEither);
    };
}
exports.fromPredicate = fromPredicate;
function fromOptionK(F) {
    var fromOptionF = fromOption(F);
    return function (onNone) {
        var from = fromOptionF(onNone);
        return function (f) { return function_1.flow(f, from); };
    };
}
exports.fromOptionK = fromOptionK;
function chainOptionK(F, M) {
    var fromOptionKF = fromOptionK(F);
    return function (onNone) {
        var from = fromOptionKF(onNone);
        return function (f) { return function (ma) { return M.chain(ma, from(f)); }; };
    };
}
exports.chainOptionK = chainOptionK;
function fromEitherK(F) {
    return function (f) { return function_1.flow(f, F.fromEither); };
}
exports.fromEitherK = fromEitherK;
function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function (f) { return function (ma) { return M.chain(ma, fromEitherKF(f)); }; };
}
exports.chainEitherK = chainEitherK;
function filterOrElse(F, M) {
    return function (predicate, onFalse) { return function (ma) {
        return M.chain(ma, function_1.flow(E.fromPredicate(predicate, onFalse), F.fromEither));
    }; };
}
exports.filterOrElse = filterOrElse;

}, function(modId) { var map = {"./Either":1619349411507,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411515, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = void 0;
/**
 * Lift a computation from the `IO` monad
 *
 * @since 2.10.0
 */
var Chain_1 = require("./Chain");
var function_1 = require("./function");
function fromIOK(F) {
    return function (f) { return function_1.flow(f, F.fromIO); };
}
exports.fromIOK = fromIOK;
function chainIOK(F, M) {
    return function (f) {
        var g = function_1.flow(f, F.fromIO);
        return function (first) { return M.chain(first, g); };
    };
}
exports.chainIOK = chainIOK;
function chainFirstIOK(F, M) {
    var chainFirstM = Chain_1.chainFirst(M);
    return function (f) { return chainFirstM(function_1.flow(f, F.fromIO)); };
}
exports.chainFirstIOK = chainFirstIOK;

}, function(modId) { var map = {"./Chain":1619349411475,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411516, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.chainFirstTaskK = exports.chainTaskK = exports.fromTaskK = void 0;
/**
 * Lift a computation from the `Task` monad
 *
 * @since 2.10.0
 */
var Chain_1 = require("./Chain");
var function_1 = require("./function");
function fromTaskK(F) {
    return function (f) { return function_1.flow(f, F.fromTask); };
}
exports.fromTaskK = fromTaskK;
function chainTaskK(F, M) {
    return function (f) {
        var g = function_1.flow(f, F.fromTask);
        return function (first) { return M.chain(first, g); };
    };
}
exports.chainTaskK = chainTaskK;
function chainFirstTaskK(F, M) {
    var chainFirstM = Chain_1.chainFirst(M);
    return function (f) { return chainFirstM(function_1.flow(f, F.fromTask)); };
}
exports.chainFirstTaskK = chainFirstTaskK;

}, function(modId) { var map = {"./Chain":1619349411475,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411517, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctorWithIndexComposition = exports.mapWithIndex = void 0;
/**
 * A `FunctorWithIndex` is a type constructor which supports a mapping operation `mapWithIndex`.
 *
 * `mapWithIndex` can be used to turn functions `i -> a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.mapWithIndex(fa, (_i, a) => a) <-> fa`
 * 2. Composition: `F.mapWithIndex(fa, (_i, a) => bc(ab(a))) <-> F.mapWithIndex(F.mapWithIndex(fa, ab), bc)`
 *
 * @since 2.0.0
 */
var function_1 = require("./function");
var Functor_1 = require("./Functor");
function mapWithIndex(F, G) {
    return function (f) { return function (fa) { return F.mapWithIndex(fa, function (i, ga) { return G.mapWithIndex(ga, function (j, a) { return f([i, j], a); }); }); }; };
}
exports.mapWithIndex = mapWithIndex;
/** @deprecated */
function getFunctorWithIndexComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    var _mapWithIndex = mapWithIndex(F, G);
    return {
        map: map,
        mapWithIndex: function (fga, f) { return function_1.pipe(fga, _mapWithIndex(f)); }
    };
}
exports.getFunctorWithIndexComposition = getFunctorWithIndexComposition;

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411518, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411519, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411520, function(require, module, exports) {

/**
 * Type defunctionalization (as describe in [Lightweight higher-kinded polymorphism](https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf))
 *
 * @since 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411521, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.ChainRec = exports.Comonad = exports.Alt = exports.Traversable = exports.Foldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getShow = exports.URI = exports.alt = exports.altW = exports.sequence = exports.traverse = exports.reduceRight = exports.foldMap = exports.reduce = exports.flatten = exports.duplicate = exports.extract = exports.extend = exports.chain = exports.of = exports.ap = exports.map = void 0;
var Apply_1 = require("./Apply");
var ChainRec_1 = require("./ChainRec");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Chain_1 = require("./Chain");
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) { return function (fa, f) { return function_1.pipe(fa, exports.foldMap(M)(f)); }; };
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
var _chainRec = ChainRec_1.tailRec;
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return f(fa); }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return fab(fa); }; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = function_1.identity;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) { return f(ma); }; };
exports.chain = chain;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) { return f(wa); }; };
exports.extend = extend;
/**
 * @category Extract
 * @since 2.6.2
 */
exports.extract = function_1.identity;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) { return f(b, fa); }; };
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function () { return function (f) { return function (fa) { return f(fa); }; }; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) { return f(fa, b); }; };
exports.reduceRight = reduceRight;
/**
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) { return F.map(f(ta), function_1.identity); }; }; };
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return F.map(ta, function_1.identity);
}; };
exports.sequence = sequence;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function () { return function_1.identity; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = exports.altW;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Identity';
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = function_1.identity;
/**
 * @category instances
 * @since 2.0.0
 */
exports.getEq = function_1.identity;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ChainRec = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain,
    chainRec: _chainRec
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.identity = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    alt: _alt,
    extract: exports.extract,
    extend: _extend,
    chainRec: _chainRec
};

}, function(modId) { var map = {"./Apply":1619349411471,"./ChainRec":1619349411499,"./function":1619349411472,"./Functor":1619349411473,"./Chain":1619349411475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411522, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411523, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonoid = exports.getSemigroup = exports.io = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.FromIO = exports.ChainRec = exports.MonadIO = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.fromIO = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = void 0;
/**
 * ```ts
 * interface IO<A> {
 *   (): A
 * }
 * ```
 *
 * `IO<A>` represents a non-deterministic synchronous computation that can cause side effects, yields a value of
 * type `A` and **never fails**. If you want to represent a synchronous computation that may fail, please see
 * `IOEither`.
 *
 * @since 2.0.0
 */
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Chain_1 = require("./Chain");
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (ma, f) { return function () { return f(ma()); }; };
var _ap = function (mab, ma) { return function () { return mab()(ma()); }; };
var _chain = function (ma, f) { return function () { return f(ma())(); }; };
var _chainRec = function (a, f) { return function () {
    var e = f(a)();
    while (e._tag === 'Left') {
        e = f(e.left)();
    }
    return e.right;
}; };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return _map(fa, f); }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return _ap(fab, fa); }; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = function_1.constant;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) { return _chain(ma, f); }; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category constructors
 * @since 2.7.0
 * @deprecated
 */
exports.fromIO = function_1.identity;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'IO';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ChainRec = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain,
    chainRec: _chainRec
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: function_1.identity
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function () { return as.map(function (a, i) { return f(i, a)(); }); }; }; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return exports.traverseArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.io = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    fromIO: exports.fromIO,
    chainRec: _chainRec
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getSemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./function":1619349411472,"./Functor":1619349411473,"./Chain":1619349411475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411524, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainFirstW = exports.chainFirst = exports.Monad = exports.Chain = exports.ApplicativeSeq = exports.ApplicativePar = exports.apSecond = exports.apFirst = exports.ApplyPar = exports.Bifunctor = exports.Pointed = exports.flap = exports.Functor = exports.getFilterable = exports.getCompactable = exports.getAltIOValidation = exports.getApplicativeIOValidation = exports.URI = exports.throwError = exports.altW = exports.alt = exports.flatten = exports.chainW = exports.chain = exports.of = exports.apW = exports.ap = exports.mapLeft = exports.bimap = exports.map = exports.swap = exports.orElseW = exports.orElse = exports.toUnion = exports.tryCatchK = exports.tryCatch = exports.getOrElseW = exports.getOrElse = exports.foldW = exports.matchEW = exports.fold = exports.matchE = exports.matchW = exports.match = exports.fromIO = exports.fromEither = exports.leftIO = exports.rightIO = exports.right = exports.left = void 0;
exports.getIOValidation = exports.getSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.ioEither = exports.Applicative = exports.sequenceSeqArray = exports.traverseSeqArray = exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.bracket = exports.fromEitherK = exports.filterOrElseW = exports.filterOrElse = exports.fromPredicate = exports.chainEitherKW = exports.chainEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromOption = exports.FromEither = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.MonadThrow = exports.MonadIO = exports.Alt = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Compactable_1 = require("./Compactable");
var E = __importStar(require("./Either"));
var ET = __importStar(require("./EitherT"));
var Filterable_1 = require("./Filterable");
var FromEither_1 = require("./FromEither");
var FromIO_1 = require("./FromIO");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var I = __importStar(require("./IO"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
exports.left = 
/*#__PURE__*/
ET.left(I.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.right = 
/*#__PURE__*/
ET.right(I.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.rightIO = 
/*#__PURE__*/
ET.rightF(I.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.leftIO = 
/*#__PURE__*/
ET.leftF(I.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = I.of;
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromIO = exports.rightIO;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = 
/*#__PURE__*/
ET.match(I.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchW = exports.match;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.matchE = 
/*#__PURE__*/
ET.matchE(I.Monad);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchEW = exports.matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchEW;
/**
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = 
/*#__PURE__*/
ET.getOrElse(I.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
exports.getOrElseW = exports.getOrElse;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f, onThrow) { return function () {
    return E.tryCatch(f, onThrow);
}; };
exports.tryCatch = tryCatch;
/**
 * Converts a function that may throw to one returning a `IOEither`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f, onThrow) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.tryCatch(function () { return f.apply(void 0, a); }, onThrow);
}; };
exports.tryCatchK = tryCatchK;
/**
 * @category interop
 * @since 2.10.0
 */
exports.toUnion = 
/*#__PURE__*/
ET.toUnion(I.Functor);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.0.0
 */
exports.orElse = 
/*#__PURE__*/
ET.orElse(I.Monad);
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
exports.orElseW = exports.orElse;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.swap = 
/*#__PURE__*/
ET.swap(I.Functor);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _apSeq = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
exports.map = 
/*#__PURE__*/
ET.map(I.Functor);
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.bimap = 
/*#__PURE__*/
ET.bimap(I.Functor);
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.mapLeft = 
/*#__PURE__*/
ET.mapLeft(I.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = 
/*#__PURE__*/
ET.ap(I.Apply);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
exports.apW = exports.ap;
/**
 * @category Pointed
 * @since 2.8.5
 */
exports.of = exports.right;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = 
/*#__PURE__*/
ET.chain(I.Monad);
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
exports.chainW = exports.chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = 
/*#__PURE__*/
ET.alt(I.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
exports.altW = exports.alt;
/**
 * @category MonadThrow
 * @since 2.7.0
 */
exports.throwError = exports.left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'IOEither';
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeIOValidation(S) {
    var ap = Apply_1.ap(I.Apply, E.getApplicativeValidation(S));
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return function_1.pipe(fab, ap(fa)); },
        of: exports.of
    };
}
exports.getApplicativeIOValidation = getApplicativeIOValidation;
/**
 * @category instances
 * @since 2.7.0
 */
function getAltIOValidation(S) {
    var alt = ET.altValidation(I.Monad, S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        alt: function (fa, that) { return function_1.pipe(fa, alt(that)); }
    };
}
exports.getAltIOValidation = getAltIOValidation;
/**
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function (M) {
    var C = E.getCompactable(M);
    return {
        URI: exports.URI,
        _E: undefined,
        compact: Compactable_1.compact(I.Functor, C),
        separate: Compactable_1.separate(I.Functor, C, E.Functor)
    };
};
exports.getCompactable = getCompactable;
/**
 * @category instances
 * @since 2.1.0
 */
function getFilterable(M) {
    var F = E.getFilterable(M);
    var C = exports.getCompactable(M);
    var filter = Filterable_1.filter(I.Functor, F);
    var filterMap = Filterable_1.filterMap(I.Functor, F);
    var partition = Filterable_1.partition(I.Functor, F);
    var partitionMap = Filterable_1.partitionMap(I.Functor, F);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: function (fa, predicate) { return function_1.pipe(fa, filter(predicate)); },
        filterMap: function (fa, f) { return function_1.pipe(fa, filterMap(f)); },
        partition: function (fa, predicate) { return function_1.pipe(fa, partition(predicate)); },
        partitionMap: function (fa, f) { return function_1.pipe(fa, partitionMap(f)); }
    };
}
exports.getFilterable = getFilterable;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplyPar = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.ApplyPar);
/**
 * @category instances
 * @since 2.8.4
 */
exports.ApplicativePar = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.8.4
 */
exports.ApplicativeSeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
exports.chainFirstW = exports.chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainOptionK = 
/*#__PURE__*/
FromEither_1.chainOptionK(exports.FromEither, exports.Chain);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainEitherK = 
/*#__PURE__*/
FromEither_1.chainEitherK(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
exports.chainEitherKW = exports.chainEitherK;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromPredicate = 
/*#__PURE__*/
FromEither_1.fromPredicate(exports.FromEither);
/**
 * @category combinators
 * @since 2.0.0
 */
exports.filterOrElse = 
/*#__PURE__*/
FromEither_1.filterOrElse(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
exports.filterOrElseW = exports.filterOrElse;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromEitherK = 
/*#__PURE__*/
FromEither_1.fromEitherK(exports.FromEither);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * @since 2.0.0
 */
var bracket = function (acquire, use, release) {
    return function_1.pipe(acquire, exports.chain(function (a) {
        return function_1.pipe(use(a), I.chain(function (e) {
            return function_1.pipe(release(a, e), exports.chain(function () { return I.of(e); }));
        }));
    }));
};
exports.bracket = bracket;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.ApplyPar);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) {
    return function_1.flow(I.traverseArrayWithIndex(f), I.map(E.sequenceArray));
};
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseSeqArrayWithIndex = function (f) { return function (as) { return function () {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        var b = f(i, as[i])();
        if (E.isLeft(b)) {
            return b;
        }
        out.push(b.right);
    }
    return E.right(out);
}; }; };
exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArray = function (f) { return exports.traverseSeqArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseSeqArray = traverseSeqArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
exports.sequenceSeqArray = 
/*#__PURE__*/
exports.traverseSeqArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`ApplicativePar`](#applicativepar) instead
 *
 * @since 2.7.0
 * @category instances
 * @deprecated
 */
exports.Applicative = exports.ApplicativePar;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ioEither = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    alt: _alt,
    fromIO: exports.fromIO,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.ApplyPar);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.ApplicativePar);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getSemigroup = function (S) {
    return Apply_1.getApplySemigroup(I.Apply)(E.getSemigroup(S));
};
exports.getSemigroup = getSemigroup;
/**
 * Use [`getApplicativeIOValidation`](#getapplicativeiovalidation) and [`getAltIOValidation`](#getaltiovalidation).
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
function getIOValidation(SE) {
    var applicativeIOValidation = getApplicativeIOValidation(SE);
    var altIOValidation = getAltIOValidation(SE);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: applicativeIOValidation.ap,
        of: exports.of,
        chain: _chain,
        bimap: _bimap,
        mapLeft: _mapLeft,
        alt: altIOValidation.alt,
        fromIO: exports.fromIO,
        throwError: exports.throwError
    };
}
exports.getIOValidation = getIOValidation;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./Compactable":1619349411502,"./Either":1619349411507,"./EitherT":1619349411508,"./Filterable":1619349411510,"./FromEither":1619349411514,"./FromIO":1619349411515,"./function":1619349411472,"./Functor":1619349411473,"./IO":1619349411523}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411525, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.newIORef = exports.IORef = void 0;
/**
 * @example
 * import { io } from 'fp-ts/IO'
 * import { newIORef } from 'fp-ts/IORef'
 *
 * assert.strictEqual(io.chain(newIORef(1), ref => io.chain(ref.write(2), () => ref.read))(), 2)
 *
 * @category model
 * @since 2.0.0
 */
var IORef = /** @class */ (function () {
    function IORef(value) {
        var _this = this;
        this.value = value;
        this.read = function () { return _this.value; };
        this.write = this.write.bind(this);
        this.modify = this.modify.bind(this);
    }
    /**
     * @since 2.0.0
     */
    IORef.prototype.write = function (a) {
        var _this = this;
        return function () {
            _this.value = a;
        };
    };
    /**
     * @since 2.0.0
     */
    IORef.prototype.modify = function (f) {
        var _this = this;
        return function () {
            _this.value = f(_this.value);
        };
    };
    return IORef;
}());
exports.IORef = IORef;
/**
 * @category constructors
 * @since 2.0.0
 */
function newIORef(a) {
    return function () { return new IORef(a); };
}
exports.newIORef = newIORef;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411526, function(require, module, exports) {

/**
 * A join-semilattice (or upper semilattice) is a semilattice whose operation is called `join`, and which can be thought
 * of as a least upper bound.
 *
 * A `JoinSemilattice` must satisfy the following laws:
 *
 * - Associativity: `a ∨ (b ∨ c) <-> (a ∨ b) ∨ c`
 * - Commutativity: `a ∨ b <-> b ∨ a`
 * - Idempotency:   `a ∨ a <-> a`
 *
 * @since 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411527, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.parse = void 0;
/**
 * @since 2.10.0
 */
var Either_1 = require("./Either");
var function_1 = require("./function");
/**
 * Converts a JavaScript Object Notation (JSON) string into a `Json` type.
 *
 * @example
 * import * as J from 'fp-ts/Json'
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('{"a":1}', J.parse), E.right({ a: 1 }))
 * assert.deepStrictEqual(pipe('{"a":}', J.parse), E.left(new SyntaxError('Unexpected token } in JSON at position 5')))
 *
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var parse = function (s) { return Either_1.parseJSON(s, function_1.identity); };
exports.parse = parse;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @example
 * import * as E from 'fp-ts/Either'
 * import * as J from 'fp-ts/Json'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(J.stringify({ a: 1 }), E.right('{"a":1}'))
 * const circular: any = { ref: null }
 * circular.ref = circular
 * assert.deepStrictEqual(
 *   pipe(
 *     J.stringify(circular),
 *     E.mapLeft(e => e instanceof Error && e.message.includes('Converting circular structure to JSON'))
 *   ),
 *   E.left(true)
 * )
 *
 *  @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var stringify = function (a) { return Either_1.stringifyJSON(a, function_1.identity); };
exports.stringify = stringify;

}, function(modId) { var map = {"./Either":1619349411507,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411528, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411529, function(require, module, exports) {

/**
 * A `Magma` is a pair `(A, concat)` in which `A` is a non-empty set and `concat` is a binary operation on `A`
 *
 * See [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html) for some instances.
 *
 * @since 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411530, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.map_ = exports.insertAt = exports.empty = exports.Filterable = exports.Compactable = exports.flap = exports.Functor = exports.getTraversableWithIndex = exports.getFoldableWithIndex = exports.getWitherable = exports.getFilterableWithIndex = exports.URI = exports.separate = exports.partitionMap = exports.partition = exports.mapWithIndex = exports.map = exports.filterMap = exports.filter = exports.compact = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.fromFoldable = exports.singleton = exports.getMonoid = exports.getEq = exports.isSubmap = exports.lookup = exports.lookupWithKey = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.upsertAt = exports.toUnfoldable = exports.toArray = exports.collect = exports.values = exports.keys = exports.elem = exports.member = exports.isEmpty = exports.size = exports.getShow = void 0;
var Either_1 = require("./Either");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var O = __importStar(require("./Option"));
var RM = __importStar(require("./ReadonlyMap"));
var Separated_1 = require("./Separated");
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RM.getShow;
/**
 * Calculate the number of key/value pairs in a map
 *
 * @since 2.0.0
 */
exports.size = RM.size;
/**
 * Test whether or not a map is empty
 *
 * @since 2.0.0
 */
exports.isEmpty = RM.isEmpty;
// TODO: remove non-curried overloading in v3
/**
 * Test whether or not a key exists in a map
 *
 * @since 2.0.0
 */
exports.member = RM.member;
// TODO: remove non-curried overloading in v3
/**
 * Test whether or not a value is a member of a map
 *
 * @since 2.0.0
 */
exports.elem = RM.elem;
/**
 * Get a sorted `Array` of the keys contained in a `Map`.
 *
 * @since 2.0.0
 */
var keys = function (O) { return function (m) { return Array.from(m.keys()).sort(O.compare); }; };
exports.keys = keys;
/**
 * Get a sorted `Array` of the values contained in a `Map`.
 *
 * @since 2.0.0
 */
var values = function (O) { return function (m) { return Array.from(m.values()).sort(O.compare); }; };
exports.values = values;
/**
 * @since 2.0.0
 */
function collect(O) {
    var keysO = exports.keys(O);
    return function (f) { return function (m) {
        var out = [];
        var ks = keysO(m);
        for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
            var key = ks_1[_i];
            out.push(f(key, m.get(key)));
        }
        return out;
    }; };
}
exports.collect = collect;
/**
 * Get a sorted `Array` of the key/value pairs contained in a `Map`.
 *
 * @since 2.0.0
 */
function toArray(O) {
    return collect(O)(function (k, a) { return [k, a]; });
}
exports.toArray = toArray;
function toUnfoldable(ord, U) {
    var toArrayO = toArray(ord);
    return function (d) {
        var kas = toArrayO(d);
        var len = kas.length;
        return U.unfold(0, function (b) { return (b < len ? O.some([kas[b], b + 1]) : O.none); });
    };
}
exports.toUnfoldable = toUnfoldable;
/**
 * Insert or replace a key/value pair in a `Map`.
 *
 * @category combinators
 * @since 2.0.0
 */
var upsertAt = function (E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k, a) {
        var lookupWithKeyEk = lookupWithKeyE(k);
        return function (m) {
            var found = lookupWithKeyEk(m);
            if (O.isNone(found)) {
                var out = new Map(m);
                out.set(k, a);
                return out;
            }
            else if (found.value[1] !== a) {
                var out = new Map(m);
                out.set(found.value[0], a);
                return out;
            }
            return m;
        };
    };
};
exports.upsertAt = upsertAt;
/**
 * Delete a key and value from a map
 *
 * @category combinators
 * @since 2.0.0
 */
var deleteAt = function (E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k) { return function (m) {
        var found = lookupWithKeyE(k, m);
        if (O.isSome(found)) {
            var r = new Map(m);
            r.delete(found.value[0]);
            return r;
        }
        return m;
    }; };
};
exports.deleteAt = deleteAt;
/**
 * @since 2.0.0
 */
var updateAt = function (E) {
    var modifyAtE = exports.modifyAt(E);
    return function (k, a) { return modifyAtE(k, function () { return a; }); };
};
exports.updateAt = updateAt;
/**
 * @since 2.0.0
 */
var modifyAt = function (E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k, f) { return function (m) {
        var found = lookupWithKeyE(k, m);
        if (O.isNone(found)) {
            return O.none;
        }
        var r = new Map(m);
        r.set(found.value[0], f(found.value[1]));
        return O.some(r);
    }; };
};
exports.modifyAt = modifyAt;
/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @since 2.0.0
 */
function pop(E) {
    var lookupE = exports.lookup(E);
    var deleteAtE = exports.deleteAt(E);
    return function (k) {
        var deleteAtEk = deleteAtE(k);
        return function (m) {
            return function_1.pipe(lookupE(k, m), O.map(function (a) { return [a, deleteAtEk(m)]; }));
        };
    };
}
exports.pop = pop;
function lookupWithKey(E) {
    return function (k, m) {
        if (m === undefined) {
            var lookupWithKeyE_1 = lookupWithKey(E);
            return function (m) { return lookupWithKeyE_1(k, m); };
        }
        var entries = m.entries();
        var e;
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = entries.next()).done) {
            var _a = e.value, ka = _a[0], a = _a[1];
            if (E.equals(ka, k)) {
                return O.some([ka, a]);
            }
        }
        return O.none;
    };
}
exports.lookupWithKey = lookupWithKey;
// TODO: remove non-curried overloading in v3
/**
 * Lookup the value for a key in a `Map`.
 *
 * @since 2.0.0
 */
exports.lookup = RM.lookup;
// TODO: remove non-curried overloading in v3
/**
 * Test whether or not one `Map` contains all of the keys and values contained in another `Map`
 *
 * @since 2.0.0
 */
exports.isSubmap = RM.isSubmap;
/**
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RM.getEq;
/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @category instances
 * @since 2.0.0
 */
function getMonoid(SK, SA) {
    var lookupWithKeyS = lookupWithKey(SK);
    return {
        concat: function (mx, my) {
            if (exports.isEmpty(mx)) {
                return my;
            }
            if (exports.isEmpty(my)) {
                return mx;
            }
            var r = new Map(mx);
            var entries = my.entries();
            var e;
            // tslint:disable-next-line: strict-boolean-expressions
            while (!(e = entries.next()).done) {
                var _a = e.value, k = _a[0], a = _a[1];
                var mxOptA = lookupWithKeyS(k, mx);
                if (O.isSome(mxOptA)) {
                    r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a));
                }
                else {
                    r.set(k, a);
                }
            }
            return r;
        },
        empty: new Map()
    };
}
exports.getMonoid = getMonoid;
/**
 * Create a map with one key/value pair
 *
 * @since 2.0.0
 */
var singleton = function (k, a) { return new Map([[k, a]]); };
exports.singleton = singleton;
function fromFoldable(E, M, F) {
    return function (fka) {
        var lookupWithKeyE = lookupWithKey(E);
        return F.reduce(fka, new Map(), function (b, _a) {
            var k = _a[0], a = _a[1];
            var bOpt = lookupWithKeyE(k, b);
            if (O.isSome(bOpt)) {
                b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
            }
            else {
                b.set(k, a);
            }
            return b;
        });
    };
}
exports.fromFoldable = fromFoldable;
var _mapWithIndex = function (fa, f) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, key = _a[0], a = _a[1];
        m.set(key, f(key, a));
    }
    return m;
};
/**
 * @category combinators
 * @since 2.10.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        var ei = f(k, a);
        if (Either_1.isLeft(ei)) {
            left.set(k, ei.left);
        }
        else {
            right.set(k, ei.right);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionMapWithIndex = partitionMapWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var partitionWithIndex = function (p) { return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        if (p(k, a)) {
            right.set(k, a);
        }
        else {
            left.set(k, a);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionWithIndex = partitionWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        var o = f(k, a);
        if (O.isSome(o)) {
            m.set(k, o.value);
        }
    }
    return m;
}; };
exports.filterMapWithIndex = filterMapWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var filterWithIndex = function (p) { return function (m) {
    var out = new Map();
    var entries = m.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        if (p(k, a)) {
            out.set(k, a);
        }
    }
    return out;
}; };
exports.filterWithIndex = filterWithIndex;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return _mapWithIndex(fa, function (_, a) { return f(a); }); };
var _filter = function (fa, p) {
    return _filterWithIndex(fa, function (_, a) { return p(a); });
};
var _filterMap = function (fa, f) { return _filterMapWithIndex(fa, function (_, a) { return f(a); }); };
var _partition = function (fa, predicate) {
    return _partitionWithIndex(fa, function (_, a) { return predicate(a); });
};
var _partitionMap = function (fa, f) { return _partitionMapWithIndex(fa, function (_, a) { return f(a); }); };
var _filterWithIndex = function (fa, p) { return function_1.pipe(fa, exports.filterWithIndex(p)); };
var _filterMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.filterMapWithIndex(f)); };
var _partitionWithIndex = function (fa, p) { return function_1.pipe(fa, exports.partitionWithIndex(p)); };
var _partitionMapWithIndex = function (fa, f) {
    return function_1.pipe(fa, exports.partitionMapWithIndex(f));
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Compactable
 * @since 2.0.0
 */
var compact = function (fa) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], oa = _a[1];
        if (O.isSome(oa)) {
            m.set(k, oa.value);
        }
    }
    return m;
};
exports.compact = compact;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filter = function (predicate) { return function (fa) { return _filter(fa, predicate); }; };
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filterMap = function (f) { return function (fa) {
    return _filterMap(fa, f);
}; };
exports.filterMap = filterMap;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return _map(fa, f); }; };
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.7.1
 */
var mapWithIndex = function (f) { return function (fa) {
    return _mapWithIndex(fa, f);
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partition = function (predicate) { return function (fa) { return _partition(fa, predicate); }; };
exports.partition = partition;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partitionMap = function (f) { return function (fa) { return _partitionMap(fa, f); }; };
exports.partitionMap = partitionMap;
/**
 * @category Compactable
 * @since 2.0.0
 */
var separate = function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], ei = _a[1];
        if (Either_1.isLeft(ei)) {
            left.set(k, ei.left);
        }
        else {
            right.set(k, ei.right);
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Map';
/**
 * @category instances
 * @since 2.0.0
 */
function getFilterableWithIndex() {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
    };
}
exports.getFilterableWithIndex = getFilterableWithIndex;
/**
 * @category instances
 * @since 2.0.0
 */
function getWitherable(O) {
    var TWI = exports.getTraversableWithIndex(O);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: TWI.reduce,
        foldMap: TWI.foldMap,
        reduceRight: TWI.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: TWI.reduceWithIndex,
        foldMapWithIndex: TWI.foldMapWithIndex,
        reduceRightWithIndex: TWI.reduceRightWithIndex,
        traverseWithIndex: TWI.traverseWithIndex,
        wilt: function (F) {
            var traverseF = TWI.traverse(F);
            return function (wa, f) { return F.map(traverseF(wa, f), exports.separate); };
        },
        wither: function (F) {
            var traverseF = TWI.traverse(F);
            return function (wa, f) { return F.map(traverseF(wa, f), exports.compact); };
        }
    };
}
exports.getWitherable = getWitherable;
/**
 * @category instances
 * @since 2.10.0
 */
var getFoldableWithIndex = function (O) {
    var keysO = exports.keys(O);
    var reduceWithIndex = function (fa, b, f) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = f(k, out, fa.get(k));
        }
        return out;
    };
    var foldMapWithIndex = function (M) { return function (fa, f) {
        var out = M.empty;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = M.concat(out, f(k, fa.get(k)));
        }
        return out;
    }; };
    var reduceRightWithIndex = function (fa, b, f) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = len - 1; i >= 0; i--) {
            var k = ks[i];
            out = f(k, fa.get(k), out);
        }
        return out;
    };
    return {
        URI: exports.URI,
        _E: undefined,
        reduce: function (fa, b, f) { return reduceWithIndex(fa, b, function (_, b, a) { return f(b, a); }); },
        foldMap: function (M) {
            var foldMapWithIndexM = foldMapWithIndex(M);
            return function (fa, f) { return foldMapWithIndexM(fa, function (_, a) { return f(a); }); };
        },
        reduceRight: function (fa, b, f) { return reduceRightWithIndex(fa, b, function (_, a, b) { return f(a, b); }); },
        reduceWithIndex: reduceWithIndex,
        foldMapWithIndex: foldMapWithIndex,
        reduceRightWithIndex: reduceRightWithIndex
    };
};
exports.getFoldableWithIndex = getFoldableWithIndex;
/**
 * @category instances
 * @since 2.10.0
 */
var getTraversableWithIndex = function (O) {
    var FWI = exports.getFoldableWithIndex(O);
    var keysO = exports.keys(O);
    var traverseWithIndex = function (F) {
        return function (ta, f) {
            var fm = F.of(new Map());
            var ks = keysO(ta);
            var len = ks.length;
            var _loop_1 = function (i) {
                var key = ks[i];
                var a = ta.get(key);
                fm = F.ap(F.map(fm, function (m) { return function (b) { return m.set(key, b); }; }), f(key, a));
            };
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
            return fm;
        };
    };
    var traverse = function (F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function (ta, f) { return traverseWithIndexF(ta, function (_, a) { return f(a); }); };
    };
    var sequence = function (F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function (ta) { return traverseWithIndexF(ta, function (_, a) { return a; }); };
    };
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: FWI.reduce,
        foldMap: FWI.foldMap,
        reduceRight: FWI.reduceRight,
        reduceWithIndex: FWI.reduceWithIndex,
        foldMapWithIndex: FWI.foldMapWithIndex,
        reduceRightWithIndex: FWI.reduceRightWithIndex,
        traverse: traverse,
        sequence: sequence,
        traverseWithIndex: traverseWithIndex
    };
};
exports.getTraversableWithIndex = getTraversableWithIndex;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use a `new Map()` instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.empty = new Map();
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.insertAt = exports.upsertAt;
/**
 * Use [`Filterable`](#filterable) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.map_ = exports.Filterable;

}, function(modId) { var map = {"./Either":1619349411507,"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478,"./ReadonlyMap":1619349411531,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411531, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAt = exports.getWitherable = exports.getTraversableWithIndex = exports.getTraversable = exports.getFoldableWithIndex = exports.getFoldable = exports.Filterable = exports.Compactable = exports.getFunctorWithIndex = exports.flap = exports.Functor = exports.getFilterableWithIndex = exports.URI = exports.separate = exports.partitionMap = exports.partition = exports.mapWithIndex = exports.map = exports.filterMap = exports.filter = exports.compact = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.fromFoldable = exports.singleton = exports.getMonoid = exports.getEq = exports.empty = exports.isSubmap = exports.lookup = exports.lookupWithKey = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.values = exports.keys = exports.elem = exports.member = exports.isEmpty = exports.size = exports.getShow = exports.toMap = exports.fromMap = void 0;
exports.readonlyMap = void 0;
var Either_1 = require("./Either");
var Eq_1 = require("./Eq");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var O = __importStar(require("./Option"));
var Separated_1 = require("./Separated");
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.5.0
 */
function fromMap(m) {
    return new Map(m);
}
exports.fromMap = fromMap;
/**
 * @category destructors
 * @since 2.5.0
 */
function toMap(m) {
    return new Map(m);
}
exports.toMap = toMap;
/**
 * @category instances
 * @since 2.5.0
 */
function getShow(SK, SA) {
    return {
        show: function (m) {
            var entries = [];
            m.forEach(function (a, k) {
                entries.push("[" + SK.show(k) + ", " + SA.show(a) + "]");
            });
            return "new Map([" + entries.sort().join(', ') + "])";
        }
    };
}
exports.getShow = getShow;
/**
 * Calculate the number of key/value pairs in a map
 *
 * @since 2.5.0
 */
function size(d) {
    return d.size;
}
exports.size = size;
/**
 * Test whether or not a map is empty
 *
 * @since 2.5.0
 */
function isEmpty(d) {
    return d.size === 0;
}
exports.isEmpty = isEmpty;
function member(E) {
    var lookupE = lookup(E);
    return function (k, m) {
        if (m === undefined) {
            var memberE_1 = member(E);
            return function (m) { return memberE_1(k, m); };
        }
        return O.isSome(lookupE(k, m));
    };
}
exports.member = member;
function elem(E) {
    return function (a, m) {
        if (m === undefined) {
            var elemE_1 = elem(E);
            return function (m) { return elemE_1(a, m); };
        }
        var values = m.values();
        var e;
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var v = e.value;
            if (E.equals(a, v)) {
                return true;
            }
        }
        return false;
    };
}
exports.elem = elem;
/**
 * Get a sorted `ReadonlyArray` of the keys contained in a `ReadonlyMap`.
 *
 * @since 2.5.0
 */
var keys = function (O) { return function (m) {
    return Array.from(m.keys()).sort(O.compare);
}; };
exports.keys = keys;
/**
 * Get a sorted `ReadonlyArray` of the values contained in a `ReadonlyMap`.
 *
 * @since 2.5.0
 */
var values = function (O) { return function (m) {
    return Array.from(m.values()).sort(O.compare);
}; };
exports.values = values;
/**
 * @since 2.5.0
 */
function collect(O) {
    var keysO = exports.keys(O);
    return function (f) { return function (m) {
        var out = [];
        var ks = keysO(m);
        for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
            var key = ks_1[_i];
            out.push(f(key, m.get(key)));
        }
        return out;
    }; };
}
exports.collect = collect;
/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyMap`.
 *
 * @since 2.5.0
 */
var toReadonlyArray = function (O) {
    return collect(O)(function (k, a) { return [k, a]; });
};
exports.toReadonlyArray = toReadonlyArray;
function toUnfoldable(ord, U) {
    var toReadonlyArrayO = exports.toReadonlyArray(ord);
    return function (d) {
        var kas = toReadonlyArrayO(d);
        var len = kas.length;
        return U.unfold(0, function (b) { return (b < len ? O.some([kas[b], b + 1]) : O.none); });
    };
}
exports.toUnfoldable = toUnfoldable;
/**
 * Insert or replace a key/value pair in a `ReadonlyMap`.
 *
 * @category combinators
 * @since 2.10.0
 */
var upsertAt = function (E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k, a) {
        var lookupWithKeyEk = lookupWithKeyE(k);
        return function (m) {
            var found = lookupWithKeyEk(m);
            if (O.isNone(found)) {
                var out = new Map(m);
                out.set(k, a);
                return out;
            }
            else if (found.value[1] !== a) {
                var out = new Map(m);
                out.set(found.value[0], a);
                return out;
            }
            return m;
        };
    };
};
exports.upsertAt = upsertAt;
/**
 * Delete a key and value from a map
 *
 * @category combinators
 * @since 2.5.0
 */
var deleteAt = function (E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k) { return function (m) {
        var found = lookupWithKeyE(k, m);
        if (O.isSome(found)) {
            var r = new Map(m);
            r.delete(found.value[0]);
            return r;
        }
        return m;
    }; };
};
exports.deleteAt = deleteAt;
/**
 * @since 2.5.0
 */
var updateAt = function (E) {
    var modifyAtE = exports.modifyAt(E);
    return function (k, a) { return modifyAtE(k, function () { return a; }); };
};
exports.updateAt = updateAt;
/**
 * @since 2.5.0
 */
var modifyAt = function (E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k, f) { return function (m) {
        var found = lookupWithKeyE(k, m);
        if (O.isNone(found)) {
            return O.none;
        }
        var _a = found.value, fk = _a[0], fv = _a[1];
        var next = f(fv);
        if (next === fv) {
            return O.some(m);
        }
        var r = new Map(m);
        r.set(fk, next);
        return O.some(r);
    }; };
};
exports.modifyAt = modifyAt;
/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @since 2.5.0
 */
function pop(E) {
    var lookupE = lookup(E);
    var deleteAtE = exports.deleteAt(E);
    return function (k) {
        var deleteAtEk = deleteAtE(k);
        return function (m) {
            return function_1.pipe(lookupE(k, m), O.map(function (a) { return [a, deleteAtEk(m)]; }));
        };
    };
}
exports.pop = pop;
function lookupWithKey(E) {
    return function (k, m) {
        if (m === undefined) {
            var lookupWithKeyE_1 = lookupWithKey(E);
            return function (m) { return lookupWithKeyE_1(k, m); };
        }
        var entries = m.entries();
        var e;
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = entries.next()).done) {
            var _a = e.value, ka = _a[0], a = _a[1];
            if (E.equals(ka, k)) {
                return O.some([ka, a]);
            }
        }
        return O.none;
    };
}
exports.lookupWithKey = lookupWithKey;
function lookup(E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function (k, m) {
        if (m === undefined) {
            var lookupE_1 = lookup(E);
            return function (m) { return lookupE_1(k, m); };
        }
        return function_1.pipe(lookupWithKeyE(k, m), O.map(function (_a) {
            var _ = _a[0], a = _a[1];
            return a;
        }));
    };
}
exports.lookup = lookup;
function isSubmap(SK, SA) {
    var lookupWithKeyS = lookupWithKey(SK);
    return function (me, that) {
        if (that === undefined) {
            var isSubmapSKSA_1 = isSubmap(SK, SA);
            return function (that) { return isSubmapSKSA_1(that, me); };
        }
        var entries = me.entries();
        var e;
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = entries.next()).done) {
            var _a = e.value, k = _a[0], a = _a[1];
            var d2OptA = lookupWithKeyS(k, that);
            if (O.isNone(d2OptA) || !SK.equals(k, d2OptA.value[0]) || !SA.equals(a, d2OptA.value[1])) {
                return false;
            }
        }
        return true;
    };
}
exports.isSubmap = isSubmap;
/**
 * @since 2.5.0
 */
exports.empty = 
// the type annotation here is intended (otherwise it doesn't type-check)
new Map();
/**
 * @category instances
 * @since 2.5.0
 */
function getEq(SK, SA) {
    var isSubmapSKSA = isSubmap(SK, SA);
    return Eq_1.fromEquals(function (x, y) { return isSubmapSKSA(x, y) && isSubmapSKSA(y, x); });
}
exports.getEq = getEq;
/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @category instances
 * @since 2.5.0
 */
function getMonoid(SK, SA) {
    var lookupWithKeyS = lookupWithKey(SK);
    return {
        concat: function (mx, my) {
            if (isEmpty(mx)) {
                return my;
            }
            if (isEmpty(my)) {
                return mx;
            }
            var r = new Map(mx);
            var entries = my.entries();
            var e;
            // tslint:disable-next-line: strict-boolean-expressions
            while (!(e = entries.next()).done) {
                var _a = e.value, k = _a[0], a = _a[1];
                var mxOptA = lookupWithKeyS(k, mx);
                if (O.isSome(mxOptA)) {
                    r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a));
                }
                else {
                    r.set(k, a);
                }
            }
            return r;
        },
        empty: exports.empty
    };
}
exports.getMonoid = getMonoid;
/**
 * Create a map with one key/value pair
 *
 * @category constructors
 * @since 2.5.0
 */
var singleton = function (k, a) { return new Map([[k, a]]); };
exports.singleton = singleton;
function fromFoldable(E, M, F) {
    return function (fka) {
        var lookupWithKeyE = lookupWithKey(E);
        return F.reduce(fka, new Map(), function (b, _a) {
            var k = _a[0], a = _a[1];
            var bOpt = lookupWithKeyE(k, b);
            if (O.isSome(bOpt)) {
                b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
            }
            else {
                b.set(k, a);
            }
            return b;
        });
    };
}
exports.fromFoldable = fromFoldable;
var _mapWithIndex = function (fa, f) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, key = _a[0], a = _a[1];
        m.set(key, f(key, a));
    }
    return m;
};
/**
 * @category combinators
 * @since 2.10.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        var ei = f(k, a);
        if (Either_1.isLeft(ei)) {
            left.set(k, ei.left);
        }
        else {
            right.set(k, ei.right);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionMapWithIndex = partitionMapWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var partitionWithIndex = function (p) { return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        if (p(k, a)) {
            right.set(k, a);
        }
        else {
            left.set(k, a);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionWithIndex = partitionWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        var o = f(k, a);
        if (O.isSome(o)) {
            m.set(k, o.value);
        }
    }
    return m;
}; };
exports.filterMapWithIndex = filterMapWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var filterWithIndex = function (p) { return function (m) {
    var out = new Map();
    var entries = m.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], a = _a[1];
        if (p(k, a)) {
            out.set(k, a);
        }
    }
    return out;
}; };
exports.filterWithIndex = filterWithIndex;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return _mapWithIndex(fa, function (_, a) { return f(a); }); };
var _filter = function (fa, p) {
    return _filterWithIndex(fa, function (_, a) { return p(a); });
};
var _filterMap = function (fa, f) { return _filterMapWithIndex(fa, function (_, a) { return f(a); }); };
var _partition = function (fa, predicate) {
    return _partitionWithIndex(fa, function (_, a) { return predicate(a); });
};
var _partitionMap = function (fa, f) { return _partitionMapWithIndex(fa, function (_, a) { return f(a); }); };
var _filterWithIndex = function (fa, p) { return function_1.pipe(fa, exports.filterWithIndex(p)); };
var _filterMapWithIndex = function (fa, f) {
    return function_1.pipe(fa, exports.filterMapWithIndex(f));
};
var _partitionWithIndex = function (fa, p) { return function_1.pipe(fa, exports.partitionWithIndex(p)); };
var _partitionMapWithIndex = function (fa, f) {
    return function_1.pipe(fa, exports.partitionMapWithIndex(f));
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Compactable
 * @since 2.5.0
 */
var compact = function (fa) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], oa = _a[1];
        if (O.isSome(oa)) {
            m.set(k, oa.value);
        }
    }
    return m;
};
exports.compact = compact;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filter = function (predicate) { return function (fa) { return _filter(fa, predicate); }; };
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filterMap = function (f) { return function (fa) { return _filterMap(fa, f); }; };
exports.filterMap = filterMap;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) { return function (fa) { return _map(fa, f); }; };
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.7.1
 */
var mapWithIndex = function (f) { return function (fa) { return _mapWithIndex(fa, f); }; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partition = function (predicate) { return function (fa) { return _partition(fa, predicate); }; };
exports.partition = partition;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partitionMap = function (f) { return function (fa) { return _partitionMap(fa, f); }; };
exports.partitionMap = partitionMap;
/**
 * @category Compactable
 * @since 2.5.0
 */
var separate = function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!(e = entries.next()).done) {
        var _a = e.value, k = _a[0], ei = _a[1];
        if (Either_1.isLeft(ei)) {
            left.set(k, ei.left);
        }
        else {
            right.set(k, ei.right);
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyMap';
/**
 * @category instances
 * @since 2.5.0
 */
function getFilterableWithIndex() {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
    };
}
exports.getFilterableWithIndex = getFilterableWithIndex;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var getFunctorWithIndex = function () { return ({
    URI: exports.URI,
    _E: undefined,
    map: _map,
    mapWithIndex: _mapWithIndex
}); };
exports.getFunctorWithIndex = getFunctorWithIndex;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.10.0
 */
var getFoldable = function (O) {
    var FWI = exports.getFoldableWithIndex(O);
    return {
        URI: exports.URI,
        _E: undefined,
        reduce: FWI.reduce,
        foldMap: FWI.foldMap,
        reduceRight: FWI.reduceRight
    };
};
exports.getFoldable = getFoldable;
/**
 * @category instances
 * @since 2.10.0
 */
var getFoldableWithIndex = function (O) {
    var keysO = exports.keys(O);
    var reduceWithIndex = function (fa, b, f) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = f(k, out, fa.get(k));
        }
        return out;
    };
    var foldMapWithIndex = function (M) { return function (fa, f) {
        var out = M.empty;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = M.concat(out, f(k, fa.get(k)));
        }
        return out;
    }; };
    var reduceRightWithIndex = function (fa, b, f) {
        var out = b;
        var ks = keysO(fa);
        var len = ks.length;
        for (var i = len - 1; i >= 0; i--) {
            var k = ks[i];
            out = f(k, fa.get(k), out);
        }
        return out;
    };
    return {
        URI: exports.URI,
        _E: undefined,
        reduce: function (fa, b, f) { return reduceWithIndex(fa, b, function (_, b, a) { return f(b, a); }); },
        foldMap: function (M) {
            var foldMapWithIndexM = foldMapWithIndex(M);
            return function (fa, f) { return foldMapWithIndexM(fa, function (_, a) { return f(a); }); };
        },
        reduceRight: function (fa, b, f) { return reduceRightWithIndex(fa, b, function (_, a, b) { return f(a, b); }); },
        reduceWithIndex: reduceWithIndex,
        foldMapWithIndex: foldMapWithIndex,
        reduceRightWithIndex: reduceRightWithIndex
    };
};
exports.getFoldableWithIndex = getFoldableWithIndex;
/**
 * @category instances
 * @since 2.10.0
 */
var getTraversable = function (O) {
    var TWI = exports.getTraversableWithIndex(O);
    var F = exports.getFoldable(O);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        reduce: F.reduce,
        foldMap: F.foldMap,
        reduceRight: F.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence
    };
};
exports.getTraversable = getTraversable;
/**
 * @category instances
 * @since 2.10.0
 */
var getTraversableWithIndex = function (O) {
    var FWI = exports.getFoldableWithIndex(O);
    var keysO = exports.keys(O);
    var traverseWithIndex = function (F) {
        return function (ta, f) {
            var fm = F.of(new Map());
            var ks = keysO(ta);
            var len = ks.length;
            var _loop_1 = function (i) {
                var key = ks[i];
                var a = ta.get(key);
                fm = F.ap(F.map(fm, function (m) { return function (b) { return m.set(key, b); }; }), f(key, a));
            };
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
            return fm;
        };
    };
    var traverse = function (F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function (ta, f) { return traverseWithIndexF(ta, function (_, a) { return f(a); }); };
    };
    var sequence = function (F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function (ta) { return traverseWithIndexF(ta, function (_, a) { return a; }); };
    };
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: FWI.reduce,
        foldMap: FWI.foldMap,
        reduceRight: FWI.reduceRight,
        reduceWithIndex: FWI.reduceWithIndex,
        foldMapWithIndex: FWI.foldMapWithIndex,
        reduceRightWithIndex: FWI.reduceRightWithIndex,
        traverse: traverse,
        sequence: sequence,
        traverseWithIndex: traverseWithIndex
    };
};
exports.getTraversableWithIndex = getTraversableWithIndex;
/**
 * @category instances
 * @since 2.5.0
 */
function getWitherable(O) {
    var TWI = exports.getTraversableWithIndex(O);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: TWI.reduce,
        foldMap: TWI.foldMap,
        reduceRight: TWI.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: TWI.reduceWithIndex,
        foldMapWithIndex: TWI.foldMapWithIndex,
        reduceRightWithIndex: TWI.reduceRightWithIndex,
        traverseWithIndex: TWI.traverseWithIndex,
        wilt: function (F) {
            var traverseF = TWI.traverse(F);
            return function (wa, f) { return F.map(traverseF(wa, f), exports.separate); };
        },
        wither: function (F) {
            var traverseF = TWI.traverse(F);
            return function (wa, f) { return F.map(traverseF(wa, f), exports.compact); };
        }
    };
}
exports.getWitherable = getWitherable;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
exports.insertAt = exports.upsertAt;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyMap = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};

}, function(modId) { var map = {"./Either":1619349411507,"./Eq":1619349411481,"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411532, function(require, module, exports) {

/**
 * A meet-semilattice (or lower semilattice) is a semilattice whose operation is called `meet`, and which can be thought
 * of as a greatest lower bound.
 *
 * A `MeetSemilattice` must satisfy the following laws:
 *
 * - Associativity: `a ∧ (b ∧ c) <-> (a ∧ b) ∧ c`
 * - Commutativity: `a ∧ b <-> b ∧ a`
 * - Idempotency:   `a ∧ a <-> a`
 *
 * @since 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411533, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411534, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411535, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411536, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411537, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionM = exports.alt = exports.chain = exports.ap = exports.map = exports.getOrElse = exports.matchE = exports.match = exports.fromEither = exports.fromPredicate = exports.chainOptionK = exports.fromOptionK = exports.chainNullableK = exports.fromNullableK = exports.fromNullable = exports.fromF = exports.zero = exports.some = void 0;
var Apply_1 = require("./Apply");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var O = __importStar(require("./Option"));
function some(F) {
    return function_1.flow(O.some, F.of);
}
exports.some = some;
function zero(F) {
    return function_1.constant(F.of(O.none));
}
exports.zero = zero;
function fromF(F) {
    return function (ma) { return F.map(ma, O.some); };
}
exports.fromF = fromF;
function fromNullable(F) {
    return function_1.flow(O.fromNullable, F.of);
}
exports.fromNullable = fromNullable;
function fromNullableK(F) {
    var fromNullableF = fromNullable(F);
    return function (f) { return function_1.flow(f, fromNullableF); };
}
exports.fromNullableK = fromNullableK;
function chainNullableK(M) {
    var chainM = chain(M);
    var fromNullableKM = fromNullableK(M);
    return function (f) { return chainM(fromNullableKM(f)); };
}
exports.chainNullableK = chainNullableK;
function fromOptionK(F) {
    return function (f) { return function_1.flow(f, F.of); };
}
exports.fromOptionK = fromOptionK;
function chainOptionK(M) {
    var chainM = chain(M);
    var fromOptionKM = fromOptionK(M);
    return function (f) { return chainM(fromOptionKM(f)); };
}
exports.chainOptionK = chainOptionK;
function fromPredicate(F) {
    return function (predicate) { return function (a) { return F.of(O.fromPredicate(predicate)(a)); }; };
}
exports.fromPredicate = fromPredicate;
function fromEither(F) {
    return function_1.flow(O.fromEither, F.of);
}
exports.fromEither = fromEither;
function match(F) {
    return function (onNone, onSome) { return function (ma) { return F.map(ma, O.match(onNone, onSome)); }; };
}
exports.match = match;
function matchE(M) {
    return function (onNone, onSome) { return function (ma) { return M.chain(ma, O.match(onNone, onSome)); }; };
}
exports.matchE = matchE;
function getOrElse(M) {
    return function (onNone) { return function (fa) { return M.chain(fa, O.match(onNone, M.of)); }; };
}
exports.getOrElse = getOrElse;
function map(F) {
    return Functor_1.map(F, O.Functor);
}
exports.map = map;
function ap(F) {
    return Apply_1.ap(F, O.Apply);
}
exports.ap = ap;
function chain(M) {
    var zeroM = zero(M);
    return function (f) { return function (ma) {
        return M.chain(ma, O.match(function () { return zeroM(); }, f));
    }; };
}
exports.chain = chain;
function alt(M) {
    var _some = some(M);
    return function (second) { return function (first) { return M.chain(first, O.match(second, _some)); }; };
}
exports.alt = alt;
/** @deprecated */
function getOptionM(M) {
    var apM = ap(M);
    var mapM = map(M);
    var chainM = chain(M);
    var altM = alt(M);
    var foldM = matchE(M);
    var getOrElseM = getOrElse(M);
    var zeroM = zero(M);
    return {
        map: function (fa, f) { return function_1.pipe(fa, mapM(f)); },
        ap: function (fab, fa) { return function_1.pipe(fab, apM(fa)); },
        of: some(M),
        chain: function (ma, f) { return function_1.pipe(ma, chainM(f)); },
        alt: function (fa, that) { return function_1.pipe(fa, altM(that)); },
        fold: function (fa, onNone, onSome) { return function_1.pipe(fa, foldM(onNone, onSome)); },
        getOrElse: function (fa, onNone) { return function_1.pipe(fa, getOrElseM(onNone)); },
        fromM: fromF(M),
        none: function () { return zeroM(); }
    };
}
exports.getOptionM = getOptionM;

}, function(modId) { var map = {"./Apply":1619349411471,"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411538, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.monoidOrdering = exports.eqOrdering = exports.semigroupOrdering = exports.invert = exports.sign = exports.Monoid = exports.Semigroup = exports.Eq = exports.reverse = exports.match = void 0;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
var match = function (onLessThan, onEqual, onGreaterThan) { return function (o) {
    return o === -1 ? onLessThan() : o === 0 ? onEqual() : onGreaterThan();
}; };
exports.match = match;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (o) { return (o === -1 ? 1 : o === 1 ? -1 : 0); };
exports.reverse = reverse;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
exports.Eq = {
    equals: function (x, y) { return x === y; }
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Semigroup = {
    concat: function (x, y) { return (x !== 0 ? x : y); }
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monoid = {
    concat: exports.Semigroup.concat,
    empty: 0
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
var sign = function (n) { return (n <= -1 ? -1 : n >= 1 ? 1 : 0); };
exports.sign = sign;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.invert = exports.reverse;
/**
 * Use [`Semigroup`](#semigroup) instead
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupOrdering = exports.Semigroup;
/**
 * Use [`Eq`](#eq) instead
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqOrdering = exports.Eq;
/**
 * Use [`Monoid`](#monoid) instead
 *
 * @category instances
 * @since 2.4.0
 * @deprecated
 */
exports.monoidOrdering = exports.Monoid;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411539, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.pipeable = void 0;
var function_1 = require("./function");
var isFunctor = function (I) { return typeof I.map === 'function'; };
var isContravariant = function (I) { return typeof I.contramap === 'function'; };
var isFunctorWithIndex = function (I) { return typeof I.mapWithIndex === 'function'; };
var isApply = function (I) { return typeof I.ap === 'function'; };
var isChain = function (I) { return typeof I.chain === 'function'; };
var isBifunctor = function (I) { return typeof I.bimap === 'function'; };
var isExtend = function (I) { return typeof I.extend === 'function'; };
var isFoldable = function (I) { return typeof I.reduce === 'function'; };
var isFoldableWithIndex = function (I) { return typeof I.reduceWithIndex === 'function'; };
var isAlt = function (I) { return typeof I.alt === 'function'; };
var isCompactable = function (I) { return typeof I.compact === 'function'; };
var isFilterable = function (I) { return typeof I.filter === 'function'; };
var isFilterableWithIndex = function (I) {
    return typeof I.filterWithIndex === 'function';
};
var isProfunctor = function (I) { return typeof I.promap === 'function'; };
var isSemigroupoid = function (I) { return typeof I.compose === 'function'; };
var isMonadThrow = function (I) { return typeof I.throwError === 'function'; };
/** @deprecated */
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) {
        var map = function (f) { return function (fa) { return I.map(fa, f); }; };
        r.map = map;
    }
    if (isContravariant(I)) {
        var contramap = function (f) { return function (fa) { return I.contramap(fa, f); }; };
        r.contramap = contramap;
    }
    if (isFunctorWithIndex(I)) {
        var mapWithIndex = function (f) { return function (fa) { return I.mapWithIndex(fa, f); }; };
        r.mapWithIndex = mapWithIndex;
    }
    if (isApply(I)) {
        var ap = function (fa) { return function (fab) { return I.ap(fab, fa); }; };
        var apFirst = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function (a) { return function () { return a; }; }), fb);
        }; };
        r.ap = ap;
        r.apFirst = apFirst;
        r.apSecond = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function () { return function (b) { return b; }; }), fb);
        }; };
    }
    if (isChain(I)) {
        var chain = function (f) { return function (ma) { return I.chain(ma, f); }; };
        var chainFirst = function (f) { return function (ma) { return I.chain(ma, function (a) { return I.map(f(a), function () { return a; }); }); }; };
        var flatten = function (mma) { return I.chain(mma, function_1.identity); };
        r.chain = chain;
        r.chainFirst = chainFirst;
        r.flatten = flatten;
    }
    if (isBifunctor(I)) {
        var bimap = function (f, g) { return function (fa) { return I.bimap(fa, f, g); }; };
        var mapLeft = function (f) { return function (fa) { return I.mapLeft(fa, f); }; };
        r.bimap = bimap;
        r.mapLeft = mapLeft;
    }
    if (isExtend(I)) {
        var extend = function (f) { return function (wa) { return I.extend(wa, f); }; };
        var duplicate = function (wa) { return I.extend(wa, function_1.identity); };
        r.extend = extend;
        r.duplicate = duplicate;
    }
    if (isFoldable(I)) {
        var reduce = function (b, f) { return function (fa) { return I.reduce(fa, b, f); }; };
        var foldMap = function (M) {
            var foldMapM = I.foldMap(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRight = function (b, f) { return function (fa) { return I.reduceRight(fa, b, f); }; };
        r.reduce = reduce;
        r.foldMap = foldMap;
        r.reduceRight = reduceRight;
    }
    if (isFoldableWithIndex(I)) {
        var reduceWithIndex = function (b, f) { return function (fa) {
            return I.reduceWithIndex(fa, b, f);
        }; };
        var foldMapWithIndex = function (M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRightWithIndex = function (b, f) { return function (fa) {
            return I.reduceRightWithIndex(fa, b, f);
        }; };
        r.reduceWithIndex = reduceWithIndex;
        r.foldMapWithIndex = foldMapWithIndex;
        r.reduceRightWithIndex = reduceRightWithIndex;
    }
    if (isAlt(I)) {
        var alt = function (that) { return function (fa) { return I.alt(fa, that); }; };
        r.alt = alt;
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        var filter = function (predicate) { return function (fa) {
            return I.filter(fa, predicate);
        }; };
        var filterMap = function (f) { return function (fa) { return I.filterMap(fa, f); }; };
        var partition = function (predicate) { return function (fa) {
            return I.partition(fa, predicate);
        }; };
        var partitionMap = function (f) { return function (fa) { return I.partitionMap(fa, f); }; };
        r.filter = filter;
        r.filterMap = filterMap;
        r.partition = partition;
        r.partitionMap = partitionMap;
    }
    if (isFilterableWithIndex(I)) {
        var filterWithIndex = function (predicateWithIndex) { return function (fa) { return I.filterWithIndex(fa, predicateWithIndex); }; };
        var filterMapWithIndex = function (f) { return function (fa) {
            return I.filterMapWithIndex(fa, f);
        }; };
        var partitionWithIndex = function (predicateWithIndex) { return function (fa) { return I.partitionWithIndex(fa, predicateWithIndex); }; };
        var partitionMapWithIndex = function (f) { return function (fa) {
            return I.partitionMapWithIndex(fa, f);
        }; };
        r.filterWithIndex = filterWithIndex;
        r.filterMapWithIndex = filterMapWithIndex;
        r.partitionWithIndex = partitionWithIndex;
        r.partitionMapWithIndex = partitionMapWithIndex;
    }
    if (isProfunctor(I)) {
        var promap = function (f, g) { return function (fa) { return I.promap(fa, f, g); }; };
        r.promap = promap;
    }
    if (isSemigroupoid(I)) {
        var compose = function (that) { return function (fa) { return I.compose(fa, that); }; };
        r.compose = compose;
    }
    if (isMonadThrow(I)) {
        var fromOption = function (onNone) { return function (ma) {
            return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        }; };
        var fromEither = function (ma) {
            return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }; };
        var filterOrElse = function (predicate, onFalse) { return function (ma) { return I.chain(ma, function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }); }; };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
exports.pipeable = pipeable;
/**
 * Use [`pipe`](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) from `function` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.pipe = function_1.pipe;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411540, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411541, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411542, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.randomElem = exports.randomBool = exports.randomRange = exports.randomInt = exports.random = void 0;
/**
 * @since 2.0.0
 */
var IO_1 = require("./IO");
var function_1 = require("./function");
/**
 * Returns a random number between 0 (inclusive) and 1 (exclusive). This is a direct wrapper around JavaScript's
 * `Math.random()`.
 *
 * @since 2.0.0
 */
var random = function () { return Math.random(); };
exports.random = random;
/**
 * Takes a range specified by `low` (the first argument) and `high` (the second), and returns a random integer uniformly
 * distributed in the closed interval `[low, high]`. It is unspecified what happens if `low > high`, or if either of
 * `low` or `high` is not an integer.
 *
 * @since 2.0.0
 */
function randomInt(low, high) {
    return function_1.pipe(exports.random, IO_1.map(function (n) { return Math.floor((high - low + 1) * n + low); }));
}
exports.randomInt = randomInt;
/**
 * Returns a random number between a minimum value (inclusive) and a maximum value (exclusive). It is unspecified what
 * happens if `maximum < minimum`.
 *
 * @since 2.0.0
 */
function randomRange(min, max) {
    return function_1.pipe(exports.random, IO_1.map(function (n) { return (max - min) * n + min; }));
}
exports.randomRange = randomRange;
/**
 * Returns a random boolean value with an equal chance of being `true` or `false`
 *
 * @since 2.0.0
 */
exports.randomBool = 
/*#__PURE__*/
function_1.pipe(exports.random, IO_1.map(function (n) { return n < 0.5; }));
/**
 * Returns a random element of a `ReadonlyNonEmptyArray`.
 *
 * @since 2.10.0
 */
var randomElem = function (as) {
    return function_1.pipe(randomInt(0, as.length - 1), IO_1.map(function (i) { return as[i]; }));
};
exports.randomElem = randomElem;

}, function(modId) { var map = {"./IO":1619349411523,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411543, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonoid = exports.getSemigroup = exports.reader = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.Do = exports.bindW = exports.bind = exports.bindTo = exports.Choice = exports.Strong = exports.Category = exports.Profunctor = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.right = exports.left = exports.second = exports.first = exports.id = exports.promap = exports.compose = exports.flatten = exports.chain = exports.chainW = exports.of = exports.ap = exports.apW = exports.map = exports.local = exports.asks = exports.ask = void 0;
/**
 * @since 2.0.0
 */
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var E = __importStar(require("./Either"));
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Chain_1 = require("./Chain");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Reads the current context
 *
 * @category constructors
 * @since 2.0.0
 */
var ask = function () { return function_1.identity; };
exports.ask = ask;
/**
 * Projects a value from the global context in a Reader
 *
 * @category constructors
 * @since 2.0.0
 */
exports.asks = function_1.identity;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @category combinators
 * @since 2.0.0
 */
var local = function (f) { return function (ma) { return function (r2) {
    return ma(f(r2));
}; }; };
exports.local = local;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
var _compose = function (bc, ab) { return function_1.pipe(bc, exports.compose(ab)); };
var _promap = function (fea, f, g) { return function_1.pipe(fea, exports.promap(f, g)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return function (r) { return f(fa(r)); }; }; };
exports.map = map;
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
var apW = function (fa) { return function (fab) { return function (r) { return fab(r)(fa(r)); }; }; };
exports.apW = apW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = exports.apW;
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = function_1.constant;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
var chainW = function (f) { return function (fa) { return function (r) { return f(fa(r))(r); }; }; };
exports.chainW = chainW;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = exports.chainW;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category Semigroupoid
 * @since 2.0.0
 */
var compose = function (ab) { return function (bc) { return function_1.flow(ab, bc); }; };
exports.compose = compose;
/**
 * @category Profunctor
 * @since 2.0.0
 */
var promap = function (f, g) { return function (fea) { return function (a) { return g(fea(f(a))); }; }; };
exports.promap = promap;
/**
 * @category Category
 * @since 2.0.0
 */
var id = function () { return function_1.identity; };
exports.id = id;
/**
 * @category Strong
 * @since 2.10.0
 */
var first = function (pab) { return function (_a) {
    var a = _a[0], c = _a[1];
    return [pab(a), c];
}; };
exports.first = first;
/**
 * @category Strong
 * @since 2.10.0
 */
var second = function (pbc) { return function (_a) {
    var a = _a[0], b = _a[1];
    return [a, pbc(b)];
}; };
exports.second = second;
/**
 * @category Choice
 * @since 2.10.0
 */
var left = function (pab) { return E.fold(function (a) { return E.left(pab(a)); }, E.right); };
exports.left = left;
/**
 * @category Choice
 * @since 2.10.0
 */
var right = function (pbc) { return E.fold(E.left, function (b) { return E.right(pbc(b)); }); };
exports.right = right;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Reader';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Profunctor = {
    URI: exports.URI,
    map: _map,
    promap: _promap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Category = {
    URI: exports.URI,
    compose: _compose,
    id: exports.id
};
/**
 * @category instances
 * @since 2.8.3
 */
exports.Strong = {
    URI: exports.URI,
    map: _map,
    promap: _promap,
    first: exports.first,
    second: exports.second
};
/**
 * @category instances
 * @since 2.8.3
 */
exports.Choice = {
    URI: exports.URI,
    map: _map,
    promap: _promap,
    left: exports.left,
    right: exports.right
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function (r) { return as.map(function (x, i) { return f(i, x)(r); }); }; }; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.reader = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    promap: _promap,
    compose: _compose,
    id: exports.id,
    first: exports.first,
    second: exports.second,
    left: exports.left,
    right: exports.right
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getSemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Either":1619349411507,"./function":1619349411472,"./Functor":1619349411473,"./Chain":1619349411475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411544, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonadThrow = exports.Alt = exports.Bifunctor = exports.chainFirstW = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getAltReaderValidation = exports.getApplicativeReaderValidation = exports.getFilterable = exports.getCompactable = exports.URI = exports.throwError = exports.altW = exports.alt = exports.flatten = exports.chainW = exports.chain = exports.of = exports.apW = exports.ap = exports.mapLeft = exports.bimap = exports.map = exports.swap = exports.orElseW = exports.orElse = exports.toUnion = exports.getOrElseW = exports.getOrElse = exports.foldW = exports.matchEW = exports.fold = exports.matchE = exports.matchW = exports.match = exports.fromEither = exports.asks = exports.ask = exports.leftReader = exports.rightReader = exports.right = exports.left = void 0;
exports.local = exports.getReaderValidation = exports.getSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.readerEither = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.fromEitherK = exports.filterOrElseW = exports.filterOrElse = exports.fromPredicate = exports.chainEitherKW = exports.chainEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromOption = exports.FromEither = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Compactable_1 = require("./Compactable");
var E = __importStar(require("./Either"));
var ET = __importStar(require("./EitherT"));
var Filterable_1 = require("./Filterable");
var FromEither_1 = require("./FromEither");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var R = __importStar(require("./Reader"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
exports.left = 
/*#__PURE__*/
ET.left(R.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.right = 
/*#__PURE__*/
ET.right(R.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.rightReader = 
/*#__PURE__*/
ET.rightF(R.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.leftReader = 
/*#__PURE__*/
ET.leftF(R.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
var ask = function () { return E.right; };
exports.ask = ask;
/**
 * @category constructors
 * @since 2.0.0
 */
var asks = function (f) { return function_1.flow(f, E.right); };
exports.asks = asks;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = R.of;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = 
/*#__PURE__*/
ET.match(R.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchW = exports.match;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.matchE = 
/*#__PURE__*/
ET.matchE(R.Monad);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchEW = exports.matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchEW;
/**
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = 
/*#__PURE__*/
ET.getOrElse(R.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
exports.getOrElseW = exports.getOrElse;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.10.0
 */
exports.toUnion = 
/*#__PURE__*/
ET.toUnion(R.Functor);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.0.0
 */
exports.orElse = 
/*#__PURE__*/
ET.orElse(R.Monad);
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
exports.orElseW = exports.orElse;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.swap = 
/*#__PURE__*/
ET.swap(R.Functor);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
exports.map = 
/*#__PURE__*/
ET.map(R.Functor);
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.bimap = 
/*#__PURE__*/
ET.bimap(R.Functor);
/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.mapLeft = 
/*#__PURE__*/
ET.mapLeft(R.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = 
/*#__PURE__*/
ET.ap(R.Apply);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
exports.apW = exports.ap;
/**
 * @category Pointed
 * @since 2.8.5
 */
exports.of = exports.right;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = 
/*#__PURE__*/
ET.chain(R.Monad);
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
exports.chainW = exports.chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = 
/*#__PURE__*/
ET.alt(R.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
exports.altW = exports.alt;
/**
 * @category MonadThrow
 * @since 2.7.0
 */
exports.throwError = exports.left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'ReaderEither';
/**
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function (M) {
    var C = E.getCompactable(M);
    return {
        URI: exports.URI,
        _E: undefined,
        compact: Compactable_1.compact(R.Functor, C),
        separate: Compactable_1.separate(R.Functor, C, E.Functor)
    };
};
exports.getCompactable = getCompactable;
/**
 * @category instances
 * @since 2.10.0
 */
function getFilterable(M) {
    var F = E.getFilterable(M);
    var C = exports.getCompactable(M);
    var filter = Filterable_1.filter(R.Functor, F);
    var filterMap = Filterable_1.filterMap(R.Functor, F);
    var partition = Filterable_1.partition(R.Functor, F);
    var partitionMap = Filterable_1.partitionMap(R.Functor, F);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: function (fa, predicate) { return function_1.pipe(fa, filter(predicate)); },
        filterMap: function (fa, f) { return function_1.pipe(fa, filterMap(f)); },
        partition: function (fa, predicate) { return function_1.pipe(fa, partition(predicate)); },
        partitionMap: function (fa, f) { return function_1.pipe(fa, partitionMap(f)); }
    };
}
exports.getFilterable = getFilterable;
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeReaderValidation(S) {
    var ap = Apply_1.ap(R.Apply, E.getApplicativeValidation(S));
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return function_1.pipe(fab, ap(fa)); },
        of: exports.of
    };
}
exports.getApplicativeReaderValidation = getApplicativeReaderValidation;
/**
 * @category instances
 * @since 2.7.0
 */
function getAltReaderValidation(S) {
    var alt = ET.altValidation(R.Monad, S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        alt: function (fa, that) { return function_1.pipe(fa, alt(that)); }
    };
}
exports.getAltReaderValidation = getAltReaderValidation;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst)
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
exports.chainFirstW = exports.chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainOptionK = 
/*#__PURE__*/
FromEither_1.chainOptionK(exports.FromEither, exports.Chain);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainEitherK = 
/*#__PURE__*/
FromEither_1.chainEitherK(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
exports.chainEitherKW = exports.chainEitherK;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromPredicate = 
/*#__PURE__*/
FromEither_1.fromPredicate(exports.FromEither);
/**
 * @category combinators
 * @since 2.0.0
 */
exports.filterOrElse = 
/*#__PURE__*/
FromEither_1.filterOrElse(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
exports.filterOrElseW = exports.filterOrElse;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromEitherK = 
/*#__PURE__*/
FromEither_1.fromEitherK(exports.FromEither);
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) {
    return function_1.flow(R.traverseArrayWithIndex(f), R.map(E.sequenceArray));
};
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.readerEither = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    alt: _alt,
    throwError: exports.left
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getSemigroup = function (S) {
    return Apply_1.getApplySemigroup(R.Apply)(E.getSemigroup(S));
};
exports.getSemigroup = getSemigroup;
/**
 * Use [`getApplicativeReaderValidation`](#getapplicativereadervalidation) and [`getAltReaderValidation`](#getaltreadervalidation) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */
function getReaderValidation(SE) {
    var applicativeReaderValidation = getApplicativeReaderValidation(SE);
    var altReaderValidation = getAltReaderValidation(SE);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: applicativeReaderValidation.ap,
        of: exports.of,
        chain: _chain,
        bimap: _bimap,
        mapLeft: _mapLeft,
        alt: altReaderValidation.alt,
        throwError: exports.throwError
    };
}
exports.getReaderValidation = getReaderValidation;
/**
 * Use [`local`](./Reader.ts.html#local) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.local = R.local;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./Compactable":1619349411502,"./Either":1619349411507,"./EitherT":1619349411508,"./Filterable":1619349411510,"./FromEither":1619349411514,"./function":1619349411472,"./Functor":1619349411473,"./Reader":1619349411543}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411545, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getReaderM = exports.fromReader = exports.chain = exports.ap = exports.map = exports.of = void 0;
var function_1 = require("./function");
function of(F) {
    return function (a) { return function () { return F.of(a); }; };
}
exports.of = of;
function map(F) {
    return function (f) { return function (fa) { return function (r) { return F.map(fa(r), f); }; }; };
}
exports.map = map;
function ap(F) {
    return function (fa) { return function (fab) { return function (r) { return F.ap(fab(r), fa(r)); }; }; };
}
exports.ap = ap;
function chain(M) {
    return function (f) { return function (ma) { return function (r) { return M.chain(ma(r), function (a) { return f(a)(r); }); }; }; };
}
exports.chain = chain;
function fromReader(F) {
    return function (ma) { return function_1.flow(ma, F.of); };
}
exports.fromReader = fromReader;
/** @deprecated */
/* istanbul ignore next */
function getReaderM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    return {
        map: function (fa, f) { return function_1.pipe(fa, _map(f)); },
        ap: function (fab, fa) { return function_1.pipe(fab, _ap(fa)); },
        of: of(M),
        chain: function (ma, f) { return function_1.pipe(ma, _chain(f)); },
        ask: function () { return M.of; },
        asks: function (f) { return function_1.flow(f, M.of); },
        local: function (ma, f) { return function (q) { return ma(f(q)); }; },
        fromReader: fromReader(M),
        fromM: function (ma) { return function () { return ma; }; }
    };
}
exports.getReaderM = getReaderM;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411546, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSemigroup = exports.readerTaskSeq = exports.readerTask = exports.sequenceSeqArray = exports.traverseSeqArray = exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.chainFirstTaskK = exports.chainTaskK = exports.fromTaskK = exports.FromTask = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.chainFirst = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Chain = exports.ApplicativeSeq = exports.ApplySeq = exports.ApplicativePar = exports.apSecond = exports.apFirst = exports.ApplyPar = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.flatten = exports.chainW = exports.chain = exports.of = exports.apW = exports.ap = exports.map = exports.fromIO = exports.fromTask = exports.asks = exports.ask = exports.fromReader = void 0;
exports.local = exports.run = exports.getMonoid = void 0;
/**
 * @since 2.3.0
 */
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var FromIO_1 = require("./FromIO");
var FromTask_1 = require("./FromTask");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var R = __importStar(require("./Reader"));
var RT = __importStar(require("./ReaderT"));
var T = __importStar(require("./Task"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.3.0
 */
exports.fromReader = 
/*#__PURE__*/
RT.fromReader(T.Pointed);
/**
 * @category constructors
 * @since 2.3.0
 */
var ask = function () { return T.of; };
exports.ask = ask;
/**
 * @category constructors
 * @since 2.3.0
 */
var asks = function (f) { return function_1.flow(f, T.of); };
exports.asks = asks;
/**
 * @category constructors
 * @since 2.3.0
 */
exports.fromTask = 
/*#__PURE__*/
R.of;
/**
 * @category constructors
 * @since 2.3.0
 */
exports.fromIO = 
/*#__PURE__*/
function_1.flow(T.fromIO, exports.fromTask);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _apPar = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _apSeq = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.3.0
 */
exports.map = 
/*#__PURE__*/
RT.map(T.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.3.0
 */
exports.ap = 
/*#__PURE__*/
RT.ap(T.ApplyPar);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
exports.apW = exports.ap;
/**
 * @category Pointed
 * @since 2.3.0
 */
exports.of = 
/*#__PURE__*/
RT.of(T.Pointed);
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.3.0
 */
exports.chain = 
/*#__PURE__*/
RT.chain(T.Monad);
/**
 * Less strict version of  [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.7
 */
exports.chainW = exports.chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.3.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.3.0
 */
exports.URI = 'ReaderTask';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplyPar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.3.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.3.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.ApplyPar);
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativePar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplySeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativeSeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadTask = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.3.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: exports.URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromTaskK = 
/*#__PURE__*/
FromTask_1.fromTaskK(exports.FromTask);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainTaskK = 
/*#__PURE__*/
FromTask_1.chainTaskK(exports.FromTask, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstTaskK = 
/*#__PURE__*/
FromTask_1.chainFirstTaskK(exports.FromTask, exports.Chain);
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.ApplyPar);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) {
    return function_1.flow(R.traverseArrayWithIndex(f), R.map(T.sequenceArray));
};
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativePar)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.10.0
 */
var traverseSeqArrayWithIndex = function (f) {
    return function_1.flow(R.traverseArrayWithIndex(f), R.map(T.sequenceSeqArray));
};
exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.10.0
 */
var traverseSeqArray = function (f) { return exports.traverseSeqArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseSeqArray = traverseSeqArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.10.0
 */
exports.sequenceSeqArray = 
/*#__PURE__*/
exports.traverseSeqArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */
exports.readerTask = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */
exports.readerTaskSeq = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apSeq,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */
exports.getSemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */
exports.getMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.ApplicativeSeq);
/**
 * @since 2.4.0
 * @deprecated
 */
/* istanbul ignore next */
function run(ma, r) {
    return ma(r)();
}
exports.run = run;
/**
 * Use [`local`](./Reader.ts.html#local) instead.
 *
 * @category combinators
 * @since 2.3.0
 * @deprecated
 */
exports.local = R.local;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./Reader":1619349411543,"./ReaderT":1619349411545,"./Task":1619349411547}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411547, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonoid = exports.getSemigroup = exports.taskSeq = exports.task = exports.sequenceSeqArray = exports.traverseSeqArray = exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.never = exports.FromTask = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.chainFirst = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Chain = exports.ApplicativeSeq = exports.ApplySeq = exports.ApplicativePar = exports.apSecond = exports.apFirst = exports.ApplyPar = exports.Pointed = exports.flap = exports.Functor = exports.getRaceMonoid = exports.URI = exports.fromTask = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = exports.delay = exports.fromIO = void 0;
/**
 * ```ts
 * interface Task<A> {
 *   (): Promise<A>
 * }
 * ```
 *
 * `Task<A>` represents an asynchronous computation that yields a value of type `A` and **never fails**.
 * If you want to represent an asynchronous computation that may fail, please see `TaskEither`.
 *
 * @since 2.0.0
 */
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var FromIO_1 = require("./FromIO");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
var fromIO = function (ma) { return function () { return Promise.resolve(ma()); }; };
exports.fromIO = fromIO;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Creates a task that will complete after a time delay
 *
 * @example
 * import { sequenceT } from 'fp-ts/Apply'
 * import * as T from 'fp-ts/Task'
 *
 * async function test() {
 *   const log: Array<string> = []
 *   const append = (message: string): T.Task<void> =>
 *     T.fromIO(() => {
 *       log.push(message)
 *     })
 *   const fa = append('a')
 *   const fb = append('b')
 *   const fc = T.delay(10)(append('c'))
 *   const fd = append('d')
 *   await sequenceT(T.ApplyPar)(fa, fb, fc, fd)()
 *   assert.deepStrictEqual(log, ['a', 'b', 'd', 'c'])
 * }
 *
 * test()
 *
 * @category combinators
 * @since 2.0.0
 */
function delay(millis) {
    return function (ma) { return function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                // tslint:disable-next-line: no-floating-promises
                ma().then(resolve);
            }, millis);
        });
    }; };
}
exports.delay = delay;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _apPar = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _apSeq = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return function () { return fa().then(f); }; }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return function () {
    return Promise.all([fab(), fa()]).then(function (_a) {
        var f = _a[0], a = _a[1];
        return f(a);
    });
}; }; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.0.0
 */
var of = function (a) { return function () { return Promise.resolve(a); }; };
exports.of = of;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) { return function () {
    return ma().then(function (a) { return f(a)(); });
}; }; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category FromTask
 * @since 2.7.0
 * @deprecated
 */
exports.fromTask = function_1.identity;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Task';
/**
 * Monoid returning the first completed task.
 *
 * Note: uses `Promise.race` internally.
 *
 * @example
 * import * as T from 'fp-ts/Task'
 *
 * async function test() {
 *   const S = T.getRaceMonoid<string>()
 *   const fa = T.delay(20)(T.of('a'))
 *   const fb = T.delay(10)(T.of('b'))
 *   assert.deepStrictEqual(await S.concat(fa, fb)(), 'b')
 * }
 *
 * test()
 *
 * @category instances
 * @since 2.0.0
 */
function getRaceMonoid() {
    return {
        concat: function (x, y) { return function () { return Promise.race([x(), y()]); }; },
        empty: exports.never
    };
}
exports.getRaceMonoid = getRaceMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplyPar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.ApplyPar);
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativePar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplySeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativeSeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadTask = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: exports.URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * A `Task` that never completes.
 *
 * @since 2.0.0
 */
var never = function () { return new Promise(function (_) { return undefined; }); };
exports.never = never;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.ApplyPar);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function () { return Promise.all(as.map(function (x, i) { return f(i, x)(); })); }; }; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return exports.traverseArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativePar)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArrayWithIndex = function (f) { return function (as) { return function () {
    return as.reduce(function (acc, a, i) {
        return acc.then(function (bs) {
            return f(i, a)().then(function (b) {
                bs.push(b);
                return bs;
            });
        });
    }, Promise.resolve([]));
}; }; };
exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArray = function (f) {
    return exports.traverseSeqArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseSeqArray = traverseSeqArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
exports.sequenceSeqArray = 
/*#__PURE__*/
exports.traverseSeqArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.task = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.taskSeq = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apSeq,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getSemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * Lift a monoid into 'Task', the inner values are concatenated using the provided `Monoid`.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.ApplicativeSeq);

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./FromIO":1619349411515,"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411548, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompactable = exports.URI = exports.throwError = exports.altW = exports.alt = exports.flatten = exports.chainW = exports.chain = exports.of = exports.apW = exports.ap = exports.mapLeft = exports.bimap = exports.map = exports.chainTaskEitherK = exports.chainTaskEitherKW = exports.fromTaskEitherK = exports.chainIOEitherK = exports.chainIOEitherKW = exports.fromIOEitherK = exports.swap = exports.orElseW = exports.orElse = exports.toUnion = exports.getOrElseW = exports.getOrElse = exports.foldW = exports.matchEW = exports.fold = exports.matchE = exports.matchW = exports.match = exports.fromEither = exports.asks = exports.ask = exports.leftIO = exports.fromTask = exports.fromIO = exports.rightIO = exports.fromReaderEither = exports.fromIOEither = exports.leftReaderTask = exports.rightReaderTask = exports.leftReader = exports.rightReader = exports.leftTask = exports.rightTask = exports.right = exports.left = exports.fromTaskEither = void 0;
exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.bracket = exports.chainFirstTaskK = exports.chainTaskK = exports.fromTaskK = exports.FromTask = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.fromEitherK = exports.filterOrElseW = exports.filterOrElse = exports.fromPredicate = exports.chainEitherKW = exports.chainEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromOption = exports.FromEither = exports.Alt = exports.Bifunctor = exports.chainFirstW = exports.chainFirst = exports.MonadThrow = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Chain = exports.ApplicativeSeq = exports.ApplySeq = exports.ApplicativePar = exports.apSecond = exports.apFirst = exports.ApplyPar = exports.Pointed = exports.flap = exports.Functor = exports.getAltReaderTaskValidation = exports.getApplicativeReaderTaskValidation = exports.getFilterable = void 0;
exports.local = exports.run = exports.getReaderTaskValidation = exports.getSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.readerTaskEitherSeq = exports.readerTaskEither = exports.sequenceSeqArray = exports.traverseSeqArray = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Compactable_1 = require("./Compactable");
var E = __importStar(require("./Either"));
var ET = __importStar(require("./EitherT"));
var Filterable_1 = require("./Filterable");
var FromEither_1 = require("./FromEither");
var FromIO_1 = require("./FromIO");
var FromTask_1 = require("./FromTask");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var R = __importStar(require("./Reader"));
var RT = __importStar(require("./ReaderTask"));
var T = __importStar(require("./Task"));
var TE = __importStar(require("./TaskEither"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromTaskEither = 
/*#__PURE__*/
R.of;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.left = 
/*#__PURE__*/
ET.left(RT.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.right = 
/*#__PURE__*/
ET.right(RT.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.rightTask = 
/*#__PURE__*/
function_1.flow(TE.rightTask, exports.fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.leftTask = 
/*#__PURE__*/
function_1.flow(TE.leftTask, exports.fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */
var rightReader = function (ma) {
    return function_1.flow(ma, TE.right);
};
exports.rightReader = rightReader;
/**
 * @category constructors
 * @since 2.0.0
 */
var leftReader = function (me) {
    return function_1.flow(me, TE.left);
};
exports.leftReader = leftReader;
/**
 * @category constructors
 * @since 2.5.0
 */
exports.rightReaderTask = 
/*#__PURE__*/
ET.rightF(RT.Functor);
/**
 * @category constructors
 * @since 2.5.0
 */
exports.leftReaderTask = 
/*#__PURE__*/
ET.leftF(RT.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromIOEither = 
/*#__PURE__*/
function_1.flow(TE.fromIOEither, exports.fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */
var fromReaderEither = function (ma) {
    return function_1.flow(ma, TE.fromEither);
};
exports.fromReaderEither = fromReaderEither;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.rightIO = 
/*#__PURE__*/
function_1.flow(TE.rightIO, exports.fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromIO = exports.rightIO;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromTask = exports.rightTask;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.leftIO = 
/*#__PURE__*/
function_1.flow(TE.leftIO, exports.fromTaskEither);
/**
 * @category constructors
 * @since 2.0.0
 */
var ask = function () { return TE.right; };
exports.ask = ask;
/**
 * @category constructors
 * @since 2.0.0
 */
var asks = function (f) {
    return function_1.flow(TE.right, TE.map(f));
};
exports.asks = asks;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = RT.of;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = 
/*#__PURE__*/
ET.match(RT.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchW = exports.match;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.matchE = 
/*#__PURE__*/
ET.matchE(RT.Chain);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchEW = exports.matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchEW;
/**
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = 
/*#__PURE__*/
ET.getOrElse(RT.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
exports.getOrElseW = exports.getOrElse;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.10.0
 */
exports.toUnion = 
/*#__PURE__*/
ET.toUnion(RT.Functor);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.0.0
 */
exports.orElse = 
/*#__PURE__*/
ET.orElse(RT.Monad);
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
exports.orElseW = exports.orElse;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.swap = 
/*#__PURE__*/
ET.swap(RT.Functor);
/**
 * @category combinators
 * @since 2.4.0
 */
var fromIOEitherK = function (f) { return function_1.flow(f, exports.fromIOEither); };
exports.fromIOEitherK = fromIOEitherK;
/**
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
var chainIOEitherKW = function (f) { return exports.chainW(exports.fromIOEitherK(f)); };
exports.chainIOEitherKW = chainIOEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainIOEitherK = exports.chainIOEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
var fromTaskEitherK = function (f) { return function_1.flow(f, exports.fromTaskEither); };
exports.fromTaskEitherK = fromTaskEitherK;
/**
 * Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
var chainTaskEitherKW = function (f) { return exports.chainW(exports.fromTaskEitherK(f)); };
exports.chainTaskEitherKW = chainTaskEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainTaskEitherK = exports.chainTaskEitherKW;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _apPar = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _apSeq = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
exports.map = 
/*#__PURE__*/
ET.map(RT.Functor);
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.bimap = 
/*#__PURE__*/
ET.bimap(RT.Functor);
/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.mapLeft = 
/*#__PURE__*/
ET.mapLeft(RT.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = 
/*#__PURE__*/
ET.ap(RT.ApplyPar);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
exports.apW = exports.ap;
/**
 * @category Pointed
 * @since 2.7.0
 */
exports.of = exports.right;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = 
/*#__PURE__*/
ET.chain(RT.Monad);
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
exports.chainW = exports.chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = 
/*#__PURE__*/
ET.alt(RT.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
exports.altW = exports.alt;
/**
 * @category MonadThrow
 * @since 2.0.0
 */
exports.throwError = exports.left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'ReaderTaskEither';
/**
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function (M) {
    var C = E.getCompactable(M);
    return {
        URI: exports.URI,
        _E: undefined,
        compact: Compactable_1.compact(RT.Functor, C),
        separate: Compactable_1.separate(RT.Functor, C, E.Functor)
    };
};
exports.getCompactable = getCompactable;
/**
 * @category instances
 * @since 2.10.0
 */
function getFilterable(M) {
    var F = E.getFilterable(M);
    var C = exports.getCompactable(M);
    var filter = Filterable_1.filter(RT.Functor, F);
    var filterMap = Filterable_1.filterMap(RT.Functor, F);
    var partition = Filterable_1.partition(RT.Functor, F);
    var partitionMap = Filterable_1.partitionMap(RT.Functor, F);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: function (fa, predicate) { return function_1.pipe(fa, filter(predicate)); },
        filterMap: function (fa, f) { return function_1.pipe(fa, filterMap(f)); },
        partition: function (fa, predicate) { return function_1.pipe(fa, partition(predicate)); },
        partitionMap: function (fa, f) { return function_1.pipe(fa, partitionMap(f)); }
    };
}
exports.getFilterable = getFilterable;
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeReaderTaskValidation(A, S) {
    var ap = Apply_1.ap(R.Apply, TE.getApplicativeTaskValidation(A, S));
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return function_1.pipe(fab, ap(fa)); },
        of: exports.of
    };
}
exports.getApplicativeReaderTaskValidation = getApplicativeReaderTaskValidation;
/**
 * @category instances
 * @since 2.7.0
 */
function getAltReaderTaskValidation(S) {
    var alt = ET.altValidation(RT.Monad, S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        alt: function (fa, that) { return function_1.pipe(fa, alt(that)); }
    };
}
exports.getAltReaderTaskValidation = getAltReaderTaskValidation;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplyPar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.ApplyPar);
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativePar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplySeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativeSeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadTask = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of,
    throwError: exports.throwError
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
exports.chainFirstW = exports.chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainOptionK = 
/*#__PURE__*/
FromEither_1.chainOptionK(exports.FromEither, exports.Chain);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainEitherK = 
/*#__PURE__*/
FromEither_1.chainEitherK(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
exports.chainEitherKW = exports.chainEitherK;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromPredicate = 
/*#__PURE__*/
FromEither_1.fromPredicate(exports.FromEither);
/**
 * @category combinators
 * @since 2.0.0
 */
exports.filterOrElse = 
/*#__PURE__*/
FromEither_1.filterOrElse(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
exports.filterOrElseW = exports.filterOrElse;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromEitherK = 
/*#__PURE__*/
FromEither_1.fromEitherK(exports.FromEither);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: exports.URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromTaskK = 
/*#__PURE__*/
FromTask_1.fromTaskK(exports.FromTask);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainTaskK = 
/*#__PURE__*/
FromTask_1.chainTaskK(exports.FromTask, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstTaskK = 
/*#__PURE__*/
FromTask_1.chainFirstTaskK(exports.FromTask, exports.Chain);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * @since 2.0.4
 */
function bracket(aquire, use, release) {
    return function (r) {
        return TE.bracket(aquire(r), function (a) { return use(a)(r); }, function (a, e) { return release(a, e)(r); });
    };
}
exports.bracket = bracket;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.ApplyPar);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) {
    return function_1.flow(R.traverseArrayWithIndex(f), R.map(TE.sequenceArray));
};
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativePar)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArrayWithIndex = function (f) {
    return function_1.flow(R.traverseArrayWithIndex(f), R.map(TE.sequenceSeqArray));
};
exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArray = function (f) { return exports.traverseSeqArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseSeqArray = traverseSeqArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
exports.sequenceSeqArray = 
/*#__PURE__*/
exports.traverseSeqArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.readerTaskEither = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    alt: _alt,
    bimap: _bimap,
    mapLeft: _mapLeft,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask,
    throwError: exports.throwError
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.readerTaskEitherSeq = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _apSeq,
    chain: _chain,
    alt: _alt,
    bimap: _bimap,
    mapLeft: _mapLeft,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.ApplicativeSeq);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getSemigroup = function (S) {
    return Apply_1.getApplySemigroup(RT.ApplySeq)(E.getSemigroup(S));
};
exports.getSemigroup = getSemigroup;
/**
 * Use [`getApplicativeReaderTaskValidation`](#getapplicativereadertaskvalidation) and [`getAltReaderTaskValidation`](#getaltreadertaskvalidation) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */
function getReaderTaskValidation(SE) {
    var applicativeReaderTaskValidation = getApplicativeReaderTaskValidation(T.ApplicativePar, SE);
    var altReaderTaskValidation = getAltReaderTaskValidation(SE);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        of: exports.of,
        chain: _chain,
        bimap: _bimap,
        mapLeft: _mapLeft,
        ap: applicativeReaderTaskValidation.ap,
        alt: altReaderTaskValidation.alt,
        fromIO: exports.fromIO,
        fromTask: exports.fromTask,
        throwError: exports.throwError
    };
}
exports.getReaderTaskValidation = getReaderTaskValidation;
/**
 * @since 2.0.0
 * @deprecated
 */
/* istanbul ignore next */
function run(ma, r) {
    return ma(r)();
}
exports.run = run;
/**
 * Use [`local`](./Reader.ts.html#local) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.local = R.local;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./Compactable":1619349411502,"./Either":1619349411507,"./EitherT":1619349411508,"./Filterable":1619349411510,"./FromEither":1619349411514,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./Reader":1619349411543,"./ReaderTask":1619349411546,"./Task":1619349411547,"./TaskEither":1619349411549}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411549, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apSecond = exports.apFirst = exports.ApplyPar = exports.Pointed = exports.flap = exports.Functor = exports.getFilterable = exports.getCompactable = exports.getAltTaskValidation = exports.getApplicativeTaskValidation = exports.URI = exports.throwError = exports.of = exports.altW = exports.alt = exports.flatten = exports.chainW = exports.chain = exports.apW = exports.ap = exports.mapLeft = exports.bimap = exports.map = exports.chainIOEitherK = exports.chainIOEitherKW = exports.fromIOEitherK = exports.swap = exports.orElseW = exports.orElse = exports.toUnion = exports.tryCatchK = exports.tryCatch = exports.getOrElseW = exports.getOrElse = exports.foldW = exports.matchEW = exports.fold = exports.matchE = exports.matchW = exports.match = exports.fromTask = exports.fromIO = exports.fromEither = exports.fromIOEither = exports.leftIO = exports.rightIO = exports.leftTask = exports.rightTask = exports.right = exports.left = void 0;
exports.getTaskValidation = exports.getSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.taskEitherSeq = exports.taskEither = exports.sequenceSeqArray = exports.traverseSeqArray = exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.bracket = exports.taskify = exports.chainFirstTaskK = exports.chainTaskK = exports.fromTaskK = exports.FromTask = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.fromEitherK = exports.filterOrElseW = exports.filterOrElse = exports.fromPredicate = exports.chainEitherKW = exports.chainEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromOption = exports.FromEither = exports.Alt = exports.Bifunctor = exports.chainFirstW = exports.chainFirst = exports.MonadThrow = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Chain = exports.ApplicativeSeq = exports.ApplySeq = exports.ApplicativePar = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Compactable_1 = require("./Compactable");
var E = __importStar(require("./Either"));
var ET = __importStar(require("./EitherT"));
var Filterable_1 = require("./Filterable");
var FromEither_1 = require("./FromEither");
var FromIO_1 = require("./FromIO");
var FromTask_1 = require("./FromTask");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var T = __importStar(require("./Task"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
exports.left = 
/*#__PURE__*/
ET.left(T.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.right = 
/*#__PURE__*/
ET.right(T.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.rightTask = 
/*#__PURE__*/
ET.rightF(T.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.leftTask = 
/*#__PURE__*/
ET.leftF(T.Functor);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.rightIO = 
/*#__PURE__*/
function_1.flow(T.fromIO, exports.rightTask);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.leftIO = 
/*#__PURE__*/
function_1.flow(T.fromIO, exports.leftTask);
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromIOEither = T.fromIO;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = T.of;
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromIO = exports.rightIO;
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromTask = exports.rightTask;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = 
/*#__PURE__*/
ET.match(T.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchW = exports.match;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.matchE = 
/*#__PURE__*/
ET.matchE(T.Monad);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchEW = exports.matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchEW;
/**
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = 
/*#__PURE__*/
ET.getOrElse(T.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
exports.getOrElseW = exports.getOrElse;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Either` instead.
 *
 * Note: `f` should never `throw` errors, they are not caught.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { left, right } from 'fp-ts/Either'
 * import { tryCatch } from 'fp-ts/TaskEither'
 *
 * tryCatch(() => Promise.resolve(1), String)().then(result => {
 *   assert.deepStrictEqual(result, right(1))
 * })
 * tryCatch(() => Promise.reject('error'), String)().then(result => {
 *   assert.deepStrictEqual(result, left('error'))
 * })
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f, onRejected) { return function () {
    return f().then(E.right, function (reason) { return E.left(onRejected(reason)); });
}; };
exports.tryCatch = tryCatch;
/**
 * Converts a function returning a `Promise` to one returning a `TaskEither`.
 *
 * @category interop
 * @since 2.5.0
 */
var tryCatchK = function (f, onRejected) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.tryCatch(function () { return f.apply(void 0, a); }, onRejected);
}; };
exports.tryCatchK = tryCatchK;
/**
 * @category interop
 * @since 2.10.0
 */
exports.toUnion = 
/*#__PURE__*/
ET.toUnion(T.Functor);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Returns `ma` if is a `Right` or the value returned by `onLeft` otherwise.
 *
 * See also [alt](#alt).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import * as TE from 'fp-ts/TaskEither'
 *
 * async function test() {
 *   const errorHandler = TE.orElse((error: string) => TE.right(`recovering from ${error}...`))
 *   assert.deepStrictEqual(await pipe(TE.right('ok'), errorHandler)(), E.right('ok'))
 *   assert.deepStrictEqual(await pipe(TE.left('ko'), errorHandler)(), E.right('recovering from ko...'))
 * }
 *
 * test()
 *
 * @category combinators
 * @since 2.0.0
 */
exports.orElse = 
/*#__PURE__*/
ET.orElse(T.Monad);
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
exports.orElseW = exports.orElse;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.swap = 
/*#__PURE__*/
ET.swap(T.Functor);
/**
 * @category combinators
 * @since 2.4.0
 */
var fromIOEitherK = function (f) { return function_1.flow(f, exports.fromIOEither); };
exports.fromIOEitherK = fromIOEitherK;
/**
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
var chainIOEitherKW = function (f) { return exports.chainW(exports.fromIOEitherK(f)); };
exports.chainIOEitherKW = chainIOEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainIOEitherK = exports.chainIOEitherKW;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
var _apPar = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _apSeq = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
exports.map = 
/*#__PURE__*/
ET.map(T.Functor);
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.bimap = 
/*#__PURE__*/
ET.bimap(T.Functor);
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
exports.mapLeft = 
/*#__PURE__*/
ET.mapLeft(T.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = 
/*#__PURE__*/
ET.ap(T.ApplyPar);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
exports.apW = exports.ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = 
/*#__PURE__*/
ET.chain(T.Monad);
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
exports.chainW = exports.chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `TaskEither` returns `fa` if is a `Right` or the value returned by `that` otherwise.
 *
 * See also [orElse](#orelse).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import * as TE from 'fp-ts/TaskEither'
 *
 * async function test() {
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.right(1),
 *       TE.alt(() => TE.right(2))
 *     )(),
 *     E.right(1)
 *   )
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.left('a'),
 *       TE.alt(() => TE.right(2))
 *     )(),
 *     E.right(2)
 *   )
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.left('a'),
 *       TE.alt(() => TE.left('b'))
 *     )(),
 *     E.left('b')
 *   )
 * }
 *
 * test()
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = 
/*#__PURE__*/
ET.alt(T.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
exports.altW = exports.alt;
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = exports.right;
/**
 * @category MonadTask
 * @since 2.7.0
 */
exports.throwError = exports.left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'TaskEither';
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeTaskValidation(A, S) {
    var ap = Apply_1.ap(A, E.getApplicativeValidation(S));
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return function_1.pipe(fab, ap(fa)); },
        of: exports.of
    };
}
exports.getApplicativeTaskValidation = getApplicativeTaskValidation;
/**
 * @category instances
 * @since 2.7.0
 */
function getAltTaskValidation(S) {
    var alt = ET.altValidation(T.Monad, S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        alt: function (fa, that) { return function_1.pipe(fa, alt(that)); }
    };
}
exports.getAltTaskValidation = getAltTaskValidation;
/**
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function (M) {
    var C = E.getCompactable(M);
    return {
        URI: exports.URI,
        _E: undefined,
        compact: Compactable_1.compact(T.Functor, C),
        separate: Compactable_1.separate(T.Functor, C, E.Functor)
    };
};
exports.getCompactable = getCompactable;
/**
 * @category instances
 * @since 2.1.0
 */
function getFilterable(M) {
    var F = E.getFilterable(M);
    var C = exports.getCompactable(M);
    var filter = Filterable_1.filter(T.Functor, F);
    var filterMap = Filterable_1.filterMap(T.Functor, F);
    var partition = Filterable_1.partition(T.Functor, F);
    var partitionMap = Filterable_1.partitionMap(T.Functor, F);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: function (fa, predicate) { return function_1.pipe(fa, filter(predicate)); },
        filterMap: function (fa, f) { return function_1.pipe(fa, filterMap(f)); },
        partition: function (fa, predicate) { return function_1.pipe(fa, partition(predicate)); },
        partitionMap: function (fa, f) { return function_1.pipe(fa, partitionMap(f)); }
    };
}
exports.getFilterable = getFilterable;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplyPar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.ApplyPar);
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativePar = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplySeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ApplicativeSeq = {
    URI: exports.URI,
    map: _map,
    ap: _apSeq,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadTask = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _apPar,
    chain: _chain,
    of: exports.of,
    throwError: exports.throwError
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
exports.chainFirstW = exports.chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainOptionK = 
/*#__PURE__*/
FromEither_1.chainOptionK(exports.FromEither, exports.Chain);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainEitherK = 
/*#__PURE__*/
FromEither_1.chainEitherK(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
exports.chainEitherKW = exports.chainEitherK;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromPredicate = 
/*#__PURE__*/
FromEither_1.fromPredicate(exports.FromEither);
/**
 * @category combinators
 * @since 2.0.0
 */
exports.filterOrElse = 
/*#__PURE__*/
FromEither_1.filterOrElse(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
exports.filterOrElseW = exports.filterOrElse;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromEitherK = 
/*#__PURE__*/
FromEither_1.fromEitherK(exports.FromEither);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: exports.URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromTaskK = 
/*#__PURE__*/
FromTask_1.fromTaskK(exports.FromTask);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainTaskK = 
/*#__PURE__*/
FromTask_1.chainTaskK(exports.FromTask, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstTaskK = 
/*#__PURE__*/
FromTask_1.chainFirstTaskK(exports.FromTask, exports.Chain);
function taskify(f) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function () {
            return new Promise(function (resolve) {
                var cbResolver = function (e, r) { return (e != null ? resolve(E.left(e)) : resolve(E.right(r))); };
                f.apply(null, args.concat(cbResolver));
            });
        };
    };
}
exports.taskify = taskify;
/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * @since 2.0.0
 */
var bracket = function (acquire, use, release) {
    return function_1.pipe(acquire, exports.chain(function (a) {
        return function_1.pipe(use(a), T.chain(function (e) {
            return function_1.pipe(release(a, e), exports.chain(function () { return T.of(e); }));
        }));
    }));
};
exports.bracket = bracket;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.ApplyPar);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) {
    return function_1.flow(T.traverseArrayWithIndex(f), T.map(E.sequenceArray));
};
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativePar)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativePar)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArrayWithIndex = function (f) { return function (as) { return function () {
    return as.reduce(function (acc, a, i) {
        return acc.then(function (ebs) {
            return E.isLeft(ebs)
                ? acc
                : f(i, a)().then(function (eb) {
                    if (E.isLeft(eb)) {
                        return eb;
                    }
                    ebs.right.push(eb.right);
                    return ebs;
                });
        });
    }, Promise.resolve(E.right([])));
}; }; };
exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
var traverseSeqArray = function (f) { return exports.traverseSeqArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseSeqArray = traverseSeqArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.9.0
 */
exports.sequenceSeqArray = 
/*#__PURE__*/
exports.traverseSeqArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.taskEither = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft,
    map: _map,
    of: exports.of,
    ap: _apPar,
    chain: _chain,
    alt: _alt,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask,
    throwError: exports.throwError
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.taskEitherSeq = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft,
    map: _map,
    of: exports.of,
    ap: _apSeq,
    chain: _chain,
    alt: _alt,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.ApplicativeSeq);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getSemigroup = function (S) {
    return Apply_1.getApplySemigroup(T.ApplySeq)(E.getSemigroup(S));
};
exports.getSemigroup = getSemigroup;
/**
 * Use [`getApplicativeTaskValidation`](#getapplicativetaskvalidation) and [`getAltTaskValidation`](#getalttaskvalidation) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
function getTaskValidation(SE) {
    var applicativeTaskValidation = getApplicativeTaskValidation(T.ApplicativePar, SE);
    var altTaskValidation = getAltTaskValidation(SE);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: applicativeTaskValidation.ap,
        of: exports.of,
        chain: _chain,
        bimap: _bimap,
        mapLeft: _mapLeft,
        alt: altTaskValidation.alt,
        fromIO: exports.fromIO,
        fromTask: exports.fromTask,
        throwError: exports.throwError
    };
}
exports.getTaskValidation = getTaskValidation;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Apply":1619349411471,"./Chain":1619349411475,"./Compactable":1619349411502,"./Either":1619349411507,"./EitherT":1619349411508,"./Filterable":1619349411510,"./FromEither":1619349411514,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./Task":1619349411547}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411550, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = void 0;
exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.FoldableWithIndex = exports.Foldable = exports.FunctorWithIndex = exports.flap = exports.Functor = void 0;
var Eq_1 = require("./Eq");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var _ = __importStar(require("./internal"));
var O = __importStar(require("./Option"));
var Separated_1 = require("./Separated");
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
function fromRecord(r) {
    return Object.assign({}, r);
}
exports.fromRecord = fromRecord;
/**
 * @category interop
 * @since 2.5.0
 */
function toRecord(r) {
    return Object.assign({}, r);
}
exports.toRecord = toRecord;
/**
 * Calculate the number of key/value pairs in a `ReadonlyRecord`,
 *
 * @since 2.5.0
 */
var size = function (r) { return Object.keys(r).length; };
exports.size = size;
/**
 * Test whether a `ReadonlyRecord` is empty.
 *
 * @since 2.5.0
 */
var isEmpty = function (r) {
    for (var k in r) {
        if (_.has.call(r, k)) {
            return false;
        }
    }
    return true;
};
exports.isEmpty = isEmpty;
/**
 * @since 2.5.0
 */
var keys = function (r) {
    return Object.keys(r).sort();
};
exports.keys = keys;
/**
 * Map a `ReadonlyRecord` into an `ReadonlyArray`.
 *
 * @example
 * import { collect } from 'fp-ts/ReadonlyRecord'
 *
 * const x: { readonly a: string, readonly b: boolean } = { a: 'c', b: false }
 * assert.deepStrictEqual(
 *   collect((key, val) => ({ key: key, value: val }))(x),
 *   [{ key: 'a', value: 'c' }, { key: 'b', value: false }]
 * )
 *
 * @since 2.5.0
 */
var collect = function (f) { return function (r) {
    var out = [];
    for (var _i = 0, _a = exports.keys(r); _i < _a.length; _i++) {
        var key = _a[_i];
        out.push(f(key, r[key]));
    }
    return out;
}; };
exports.collect = collect;
/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyRecord`.
 *
 * @since 2.5.0
 */
exports.toReadonlyArray = 
/*#__PURE__*/
exports.collect(function (k, a) { return [k, a]; });
function toUnfoldable(U) {
    return function (r) {
        var sas = exports.toReadonlyArray(r);
        var len = sas.length;
        return U.unfold(0, function (b) { return (b < len ? O.some([sas[b], b + 1]) : O.none); });
    };
}
exports.toUnfoldable = toUnfoldable;
/**
 * Insert or replace a key/value pair in a `ReadonlyRecord`.
 *
 * @category combinators
 * @since 2.10.0
 */
var upsertAt = function (k, a) { return function (r) {
    if (_.has.call(r, k) && r[k] === a) {
        return r;
    }
    var out = Object.assign({}, r);
    out[k] = a;
    return out;
}; };
exports.upsertAt = upsertAt;
/**
 * Test whether or not a key exists in a `ReadonlyRecord`.
 *
 * Note. This function is not pipeable because is a custom type guard.
 *
 * @since 2.10.0
 */
var has = function (k, r) { return _.has.call(r, k); };
exports.has = has;
function deleteAt(k) {
    return function (r) {
        if (!_.has.call(r, k)) {
            return r;
        }
        var out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
exports.deleteAt = deleteAt;
/**
 * @since 2.5.0
 */
var updateAt = function (k, a) { return function (r) {
    if (!exports.has(k, r)) {
        return O.none;
    }
    if (r[k] === a) {
        return O.some(r);
    }
    var out = Object.assign({}, r);
    out[k] = a;
    return O.some(out);
}; };
exports.updateAt = updateAt;
/**
 * @since 2.5.0
 */
var modifyAt = function (k, f) { return function (r) {
    if (!exports.has(k, r)) {
        return O.none;
    }
    var next = f(r[k]);
    if (next === r[k]) {
        return O.some(r);
    }
    var out = Object.assign({}, r);
    out[k] = next;
    return O.some(out);
}; };
exports.modifyAt = modifyAt;
function pop(k) {
    var deleteAtk = deleteAt(k);
    return function (r) {
        var oa = lookup(k, r);
        return O.isNone(oa) ? O.none : O.some([oa.value, deleteAtk(r)]);
    };
}
exports.pop = pop;
function isSubrecord(E) {
    return function (me, that) {
        if (that === undefined) {
            var isSubrecordE_1 = isSubrecord(E);
            return function (that) { return isSubrecordE_1(that, me); };
        }
        for (var k in me) {
            if (!_.has.call(that, k) || !E.equals(me[k], that[k])) {
                return false;
            }
        }
        return true;
    };
}
exports.isSubrecord = isSubrecord;
function lookup(k, r) {
    if (r === undefined) {
        return function (r) { return lookup(k, r); };
    }
    return _.has.call(r, k) ? O.some(r[k]) : O.none;
}
exports.lookup = lookup;
/**
 * @since 2.5.0
 */
exports.empty = {};
function mapWithIndex(f) {
    return function (r) {
        var out = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                out[k] = f(k, r[k]);
            }
        }
        return out;
    };
}
exports.mapWithIndex = mapWithIndex;
function map(f) {
    return mapWithIndex(function (_, a) { return f(a); });
}
exports.map = map;
function reduceWithIndex(b, f) {
    return function (fa) {
        var out = b;
        var ks = exports.keys(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = f(k, out, fa[k]);
        }
        return out;
    };
}
exports.reduceWithIndex = reduceWithIndex;
function foldMapWithIndex(M) {
    return function (f) { return function (fa) {
        var out = M.empty;
        var ks = exports.keys(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = M.concat(out, f(k, fa[k]));
        }
        return out;
    }; };
}
exports.foldMapWithIndex = foldMapWithIndex;
function reduceRightWithIndex(b, f) {
    return function (fa) {
        var out = b;
        var ks = exports.keys(fa);
        var len = ks.length;
        for (var i = len - 1; i >= 0; i--) {
            var k = ks[i];
            out = f(k, fa[k], out);
        }
        return out;
    };
}
exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * Create a `ReadonlyRecord` with one key/value pair.
 *
 * @category constructors
 * @since 2.5.0
 */
var singleton = function (k, a) {
    var _a;
    return (_a = {}, _a[k] = a, _a);
};
exports.singleton = singleton;
function traverseWithIndex(F) {
    return function (f) { return function (ta) {
        var ks = exports.keys(ta);
        if (ks.length === 0) {
            return F.of(exports.empty);
        }
        var fr = F.of({});
        var _loop_1 = function (key) {
            fr = F.ap(F.map(fr, function (r) { return function (b) {
                r[key] = b;
                return r;
            }; }), f(key, ta[key]));
        };
        for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
            var key = ks_1[_i];
            _loop_1(key);
        }
        return fr;
    }; };
}
exports.traverseWithIndex = traverseWithIndex;
function traverse(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
}
exports.traverse = traverse;
function sequence(F) {
    return traverseWithIndex(F)(function (_, a) { return a; });
}
exports.sequence = sequence;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
function partitionMapWithIndex(f) {
    return function (r) {
        var left = {};
        var right = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                var e = f(k, r[k]);
                switch (e._tag) {
                    case 'Left':
                        left[k] = e.left;
                        break;
                    case 'Right':
                        right[k] = e.right;
                        break;
                }
            }
        }
        return Separated_1.separated(left, right);
    };
}
exports.partitionMapWithIndex = partitionMapWithIndex;
function partitionWithIndex(predicateWithIndex) {
    return function (r) {
        var left = {};
        var right = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                var a = r[k];
                if (predicateWithIndex(k, a)) {
                    right[k] = a;
                }
                else {
                    left[k] = a;
                }
            }
        }
        return Separated_1.separated(left, right);
    };
}
exports.partitionWithIndex = partitionWithIndex;
function filterMapWithIndex(f) {
    return function (r) {
        var out = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                var ob = f(k, r[k]);
                if (_.isSome(ob)) {
                    out[k] = ob.value;
                }
            }
        }
        return out;
    };
}
exports.filterMapWithIndex = filterMapWithIndex;
function filterWithIndex(predicateWithIndex) {
    return function (fa) {
        var out = {};
        var changed = false;
        for (var key in fa) {
            if (_.has.call(fa, key)) {
                var a = fa[key];
                if (predicateWithIndex(key, a)) {
                    out[key] = a;
                }
                else {
                    changed = true;
                }
            }
        }
        return changed ? out : fa;
    };
}
exports.filterWithIndex = filterWithIndex;
function fromFoldable(M, F) {
    var fromFoldableMapM = fromFoldableMap(M, F);
    return function (fka) { return fromFoldableMapM(fka, function_1.identity); };
}
exports.fromFoldable = fromFoldable;
function fromFoldableMap(M, F) {
    return function (ta, f) {
        return F.reduce(ta, {}, function (r, a) {
            var _a = f(a), k = _a[0], b = _a[1];
            r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
        });
    };
}
exports.fromFoldableMap = fromFoldableMap;
/**
 * @since 2.5.0
 */
function every(predicate) {
    return function (r) {
        for (var k in r) {
            if (!predicate(r[k])) {
                return false;
            }
        }
        return true;
    };
}
exports.every = every;
/**
 * @since 2.5.0
 */
function some(predicate) {
    return function (r) {
        for (var k in r) {
            if (predicate(r[k])) {
                return true;
            }
        }
        return false;
    };
}
exports.some = some;
function elem(E) {
    return function (a, fa) {
        if (fa === undefined) {
            var elemE_1 = elem(E);
            return function (fa) { return elemE_1(a, fa); };
        }
        for (var k in fa) {
            if (E.equals(fa[k], a)) {
                return true;
            }
        }
        return false;
    };
}
exports.elem = elem;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, mapWithIndex(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _filter = function (fa, predicate) {
    return function_1.pipe(fa, exports.filter(predicate));
};
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) { return function_1.pipe(fa, exports.partition(predicate)); };
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, partitionMapWithIndex(f)); };
/* istanbul ignore next */
var _partitionWithIndex = function (fa, predicateWithIndex) {
    return function_1.pipe(fa, partitionWithIndex(predicateWithIndex));
};
/* istanbul ignore next */
var _filterMapWithIndex = function (fa, f) {
    return function_1.pipe(fa, filterMapWithIndex(f));
};
/* istanbul ignore next */
var _filterWithIndex = function (fa, predicateWithIndex) {
    return function_1.pipe(fa, filterWithIndex(predicateWithIndex));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Filterable
 * @since 2.5.0
 */
var filter = function (predicate) {
    return filterWithIndex(function (_, a) { return predicate(a); });
};
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filterMap = function (f) { return filterMapWithIndex(function (_, a) { return f(a); }); };
exports.filterMap = filterMap;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partition = function (predicate) {
    return partitionWithIndex(function (_, a) { return predicate(a); });
};
exports.partition = partition;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partitionMap = function (f) {
    return partitionMapWithIndex(function (_, a) { return f(a); });
};
exports.partitionMap = partitionMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (f) { return foldMapWithIndexM(function (_, a) { return f(a); }); };
};
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return reduceRightWithIndex(b, function (_, a, b) { return f(a, b); });
};
exports.reduceRight = reduceRight;
/**
 * @category Compactable
 * @since 2.5.0
 */
var compact = function (r) {
    var out = {};
    for (var k in r) {
        if (_.has.call(r, k)) {
            var oa = r[k];
            if (_.isSome(oa)) {
                out[k] = oa.value;
            }
        }
    }
    return out;
};
exports.compact = compact;
/**
 * @category Compactable
 * @since 2.5.0
 */
var separate = function (r) {
    var left = {};
    var right = {};
    for (var k in r) {
        if (_.has.call(r, k)) {
            var e = r[k];
            if (_.isLeft(e)) {
                left[k] = e.left;
            }
            else {
                right[k] = e.right;
            }
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyRecord';
/**
 * @category instances
 * @since 2.5.0
 */
function getShow(S) {
    return {
        show: function (r) {
            var elements = exports.collect(function (k, a) { return JSON.stringify(k) + ": " + S.show(a); })(r).join(', ');
            return elements === '' ? '{}' : "{ " + elements + " }";
        }
    };
}
exports.getShow = getShow;
function getEq(E) {
    var isSubrecordE = isSubrecord(E);
    return Eq_1.fromEquals(function (x, y) { return isSubrecordE(x)(y) && isSubrecordE(y)(x); });
}
exports.getEq = getEq;
function getMonoid(S) {
    return {
        concat: function (first, second) {
            if (exports.isEmpty(first)) {
                return second;
            }
            if (exports.isEmpty(second)) {
                return first;
            }
            var r = Object.assign({}, first);
            for (var k in second) {
                if (_.has.call(second, k)) {
                    r[k] = _.has.call(first, k) ? S.concat(first[k], second[k]) : second[k];
                }
            }
            return r;
        },
        empty: exports.empty
    };
}
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
exports.insertAt = exports.upsertAt;
function hasOwnProperty(k, r) {
    return _.has.call(r === undefined ? this : r, k);
}
exports.hasOwnProperty = hasOwnProperty;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyRecord = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: _traverseWithIndex,
    wither: _wither,
    wilt: _wilt
};

}, function(modId) { var map = {"./Eq":1619349411481,"./function":1619349411472,"./Functor":1619349411473,"./internal":1619349411477,"./Option":1619349411478,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411551, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromArray = exports.toReadonlyArray = exports.elem = exports.isSubset = exports.every = exports.some = exports.size = exports.isEmpty = exports.empty = exports.filterMap = exports.separate = exports.compact = exports.fromReadonlyArray = exports.toggle = exports.remove = exports.insert = exports.singleton = exports.foldMap = exports.reduce = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.difference = exports.partitionMap = exports.intersection = exports.union = exports.partition = exports.filter = exports.chain = exports.map = exports.getEq = exports.getShow = exports.toSet = exports.fromSet = void 0;
var Eq_1 = require("./Eq");
var function_1 = require("./function");
var Separated_1 = require("./Separated");
/**
 * @category constructors
 * @since 2.5.0
 */
function fromSet(s) {
    return new Set(s);
}
exports.fromSet = fromSet;
/**
 * @category destructors
 * @since 2.5.0
 */
function toSet(s) {
    return new Set(s);
}
exports.toSet = toSet;
/**
 * @category instances
 * @since 2.5.0
 */
function getShow(S) {
    return {
        show: function (s) {
            var entries = [];
            s.forEach(function (a) {
                entries.push(S.show(a));
            });
            return "new Set([" + entries.sort().join(', ') + "])";
        }
    };
}
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.5.0
 */
function getEq(E) {
    var subsetE = isSubset(E);
    return Eq_1.fromEquals(function (x, y) { return subsetE(x, y) && subsetE(y, x); });
}
exports.getEq = getEq;
/**
 * Projects a Set through a function
 *
 * @category combinators
 * @since 2.5.0
 */
function map(E) {
    var elemE = elem(E);
    return function (f) { return function (set) {
        var r = new Set();
        set.forEach(function (e) {
            var v = f(e);
            if (!elemE(v, r)) {
                r.add(v);
            }
        });
        return r;
    }; };
}
exports.map = map;
/**
 * @category combinators
 * @since 2.5.0
 */
function chain(E) {
    var elemE = elem(E);
    return function (f) { return function (set) {
        var r = new Set();
        set.forEach(function (e) {
            f(e).forEach(function (e) {
                if (!elemE(e, r)) {
                    r.add(e);
                }
            });
        });
        return r;
    }; };
}
exports.chain = chain;
function filter(predicate) {
    return function (set) {
        var values = set.values();
        var e;
        var r = new Set();
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var value = e.value;
            if (predicate(value)) {
                r.add(value);
            }
        }
        return r;
    };
}
exports.filter = filter;
function partition(predicate) {
    return function (set) {
        var values = set.values();
        var e;
        var right = new Set();
        var left = new Set();
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var value = e.value;
            if (predicate(value)) {
                right.add(value);
            }
            else {
                left.add(value);
            }
        }
        return Separated_1.separated(left, right);
    };
}
exports.partition = partition;
function union(E) {
    var elemE = elem(E);
    return function (me, that) {
        if (that === undefined) {
            var unionE_1 = union(E);
            return function (that) { return unionE_1(me, that); };
        }
        if (exports.isEmpty(me)) {
            return that;
        }
        if (exports.isEmpty(that)) {
            return me;
        }
        var r = new Set(me);
        that.forEach(function (e) {
            if (!elemE(e, r)) {
                r.add(e);
            }
        });
        return r;
    };
}
exports.union = union;
function intersection(E) {
    var elemE = elem(E);
    return function (me, that) {
        if (that === undefined) {
            var intersectionE_1 = intersection(E);
            return function (that) { return intersectionE_1(that, me); };
        }
        if (exports.isEmpty(me) || exports.isEmpty(that)) {
            return exports.empty;
        }
        var r = new Set();
        me.forEach(function (e) {
            if (elemE(e, that)) {
                r.add(e);
            }
        });
        return r;
    };
}
exports.intersection = intersection;
/**
 * @since 2.5.0
 */
function partitionMap(EB, EC) {
    return function (f) { return function (set) {
        var values = set.values();
        var e;
        var left = new Set();
        var right = new Set();
        var hasB = elem(EB);
        var hasC = elem(EC);
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var v = f(e.value);
            switch (v._tag) {
                case 'Left':
                    if (!hasB(v.left, left)) {
                        left.add(v.left);
                    }
                    break;
                case 'Right':
                    if (!hasC(v.right, right)) {
                        right.add(v.right);
                    }
                    break;
            }
        }
        return Separated_1.separated(left, right);
    }; };
}
exports.partitionMap = partitionMap;
function difference(E) {
    var elemE = elem(E);
    return function (me, that) {
        if (that === undefined) {
            var differenceE_1 = difference(E);
            return function (that) { return differenceE_1(that, me); };
        }
        return filter(function (a) { return !elemE(a, that); })(me);
    };
}
exports.difference = difference;
/**
 * @category instances
 * @since 2.5.0
 */
function getUnionMonoid(E) {
    return {
        concat: union(E),
        empty: exports.empty
    };
}
exports.getUnionMonoid = getUnionMonoid;
/**
 * @category instances
 * @since 2.5.0
 */
function getIntersectionSemigroup(E) {
    return {
        concat: intersection(E)
    };
}
exports.getIntersectionSemigroup = getIntersectionSemigroup;
/**
 * @since 2.5.0
 */
function reduce(O) {
    var toReadonlyArrayO = exports.toReadonlyArray(O);
    return function (b, f) { return function (fa) { return toReadonlyArrayO(fa).reduce(f, b); }; };
}
exports.reduce = reduce;
/**
 * @since 2.5.0
 */
function foldMap(O, M) {
    var toReadonlyArrayO = exports.toReadonlyArray(O);
    return function (f) { return function (fa) { return toReadonlyArrayO(fa).reduce(function (b, a) { return M.concat(b, f(a)); }, M.empty); }; };
}
exports.foldMap = foldMap;
/**
 * Create a set with one element
 *
 * @category constructors
 * @since 2.5.0
 */
var singleton = function (a) { return new Set([a]); };
exports.singleton = singleton;
/**
 * Insert a value into a set
 *
 * @category combinators
 * @since 2.5.0
 */
function insert(E) {
    var elemE = elem(E);
    return function (a) { return function (set) {
        if (!elemE(a)(set)) {
            var r = new Set(set);
            r.add(a);
            return r;
        }
        else {
            return set;
        }
    }; };
}
exports.insert = insert;
/**
 * Delete a value from a set
 *
 * @category combinators
 * @since 2.5.0
 */
var remove = function (E) { return function (a) { return function (set) {
    return filter(function (ax) { return !E.equals(a, ax); })(set);
}; }; };
exports.remove = remove;
/**
 * Checks an element is a member of a set;
 * If yes, removes the value from the set
 * If no, inserts the value to the set
 *
 * @category combinators
 * @since 2.10.0
 */
var toggle = function (E) {
    var elemE = elem(E);
    var removeE = exports.remove(E);
    var insertE = insert(E);
    return function (a) { return function (set) { return (elemE(a, set) ? removeE : insertE)(a)(set); }; };
};
exports.toggle = toggle;
/**
 * Create a set from an array
 *
 * @category constructors
 * @since 2.10.0
 */
var fromReadonlyArray = function (E) { return function (as) {
    var len = as.length;
    var out = new Set();
    var has = elem(E);
    for (var i = 0; i < len; i++) {
        var a = as[i];
        if (!has(a, out)) {
            out.add(a);
        }
    }
    return out;
}; };
exports.fromReadonlyArray = fromReadonlyArray;
/**
 * @category combinators
 * @since 2.5.0
 */
var compact = function (E) { return filterMap(E)(function_1.identity); };
exports.compact = compact;
/**
 * @since 2.5.0
 */
function separate(EE, EA) {
    return function (fa) {
        var elemEE = elem(EE);
        var elemEA = elem(EA);
        var left = new Set();
        var right = new Set();
        fa.forEach(function (e) {
            switch (e._tag) {
                case 'Left':
                    if (!elemEE(e.left, left)) {
                        left.add(e.left);
                    }
                    break;
                case 'Right':
                    if (!elemEA(e.right, right)) {
                        right.add(e.right);
                    }
                    break;
            }
        });
        return Separated_1.separated(left, right);
    };
}
exports.separate = separate;
/**
 * @category combinators
 * @since 2.5.0
 */
function filterMap(E) {
    var elemE = elem(E);
    return function (f) { return function (fa) {
        var r = new Set();
        fa.forEach(function (a) {
            var ob = f(a);
            if (ob._tag === 'Some' && !elemE(ob.value, r)) {
                r.add(ob.value);
            }
        });
        return r;
    }; };
}
exports.filterMap = filterMap;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.5.0
 */
exports.empty = new Set();
/**
 * Test whether a `ReadonlySet` is empty.
 *
 * @since 2.10.0
 */
var isEmpty = function (set) { return set.size === 0; };
exports.isEmpty = isEmpty;
/**
 * Calculate the number of elements in a `ReadonlySet`.
 *
 * @since 2.10.0
 */
var size = function (set) { return set.size; };
exports.size = size;
/**
 * @since 2.5.0
 */
var some = function (predicate) { return function (set) {
    var values = set.values();
    var e;
    var found = false;
    // tslint:disable-next-line: strict-boolean-expressions
    while (!found && !(e = values.next()).done) {
        found = predicate(e.value);
    }
    return found;
}; };
exports.some = some;
/**
 * @since 2.5.0
 */
var every = function (predicate) { return function_1.not(exports.some(function_1.not(predicate))); };
exports.every = every;
function isSubset(E) {
    var elemE = elem(E);
    return function (me, that) {
        if (that === undefined) {
            var isSubsetE_1 = isSubset(E);
            return function (that) { return isSubsetE_1(that, me); };
        }
        return exports.every(function (a) { return elemE(a, that); })(me);
    };
}
exports.isSubset = isSubset;
function elem(E) {
    return function (a, set) {
        if (set === undefined) {
            var elemE_1 = elem(E);
            return function (set) { return elemE_1(a, set); };
        }
        var values = set.values();
        var e;
        var found = false;
        // tslint:disable-next-line: strict-boolean-expressions
        while (!found && !(e = values.next()).done) {
            found = E.equals(a, e.value);
        }
        return found;
    };
}
exports.elem = elem;
/**
 * Get a sorted `ReadonlyArray` of the values contained in a `ReadonlySet`.
 *
 * @since 2.5.0
 */
var toReadonlyArray = function (O) { return function (set) {
    var out = [];
    set.forEach(function (e) { return out.push(e); });
    return out.sort(O.compare);
}; };
exports.toReadonlyArray = toReadonlyArray;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`fromReadonlyArray`](#fromreadonlyarray) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
exports.fromArray = exports.fromReadonlyArray;

}, function(modId) { var map = {"./Eq":1619349411481,"./function":1619349411472,"./Separated":1619349411479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411552, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.readonlyTuple = exports.mapLeft = exports.map = exports.Traversable = exports.Foldable = exports.Comonad = exports.Semigroupoid = exports.Bifunctor = exports.flap = exports.Functor = exports.URI = exports.sequence = exports.traverse = exports.reduceRight = exports.foldMap = exports.reduce = exports.duplicate = exports.extract = exports.extend = exports.compose = exports.mapSnd = exports.mapFst = exports.bimap = exports.getChainRec = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.swap = exports.snd = exports.fst = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.5.0
 */
function fst(ea) {
    return ea[0];
}
exports.fst = fst;
/**
 * @category destructors
 * @since 2.5.0
 */
function snd(ea) {
    return ea[1];
}
exports.snd = snd;
/**
 * @category combinators
 * @since 2.5.0
 */
var swap = function (ea) { return [snd(ea), fst(ea)]; };
exports.swap = swap;
/**
 * @category instances
 * @since 2.5.0
 */
function getApply(S) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return [fst(fab)(fst(fa)), S.concat(snd(fab), snd(fa))]; }
    };
}
exports.getApply = getApply;
var of = function (M) { return function (a) {
    return [a, M.empty];
}; };
/**
 * @category instances
 * @since 2.5.0
 */
function getApplicative(M) {
    var A = getApply(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        of: of(M)
    };
}
exports.getApplicative = getApplicative;
/**
 * @category instances
 * @since 2.5.0
 */
function getChain(S) {
    var A = getApply(S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        chain: function (ma, f) {
            var _a = f(fst(ma)), b = _a[0], s = _a[1];
            return [b, S.concat(snd(ma), s)];
        }
    };
}
exports.getChain = getChain;
/**
 * @category instances
 * @since 2.5.0
 */
function getMonad(M) {
    var C = getChain(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
exports.getMonad = getMonad;
/**
 * @category instances
 * @since 2.5.0
 */
function getChainRec(M) {
    var chainRec = function (a, f) {
        var result = f(a);
        var acc = M.empty;
        var s = fst(result);
        while (s._tag === 'Left') {
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [s.right, M.concat(acc, snd(result))];
    };
    var C = getChain(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        chainRec: chainRec
    };
}
exports.getChainRec = getChainRec;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _compose = function (bc, ab) { return function_1.pipe(bc, exports.compose(ab)); };
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.mapFst(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapSnd(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.5.0
 */
var bimap = function (f, g) { return function (fa) { return [g(fst(fa)), f(snd(fa))]; }; };
exports.bimap = bimap;
/**
 * Map a function over the first component of a `ReadonlyTuple`.
 *
 * This is the `map` operation of the `Functor` instance.
 *
 * @category Functor
 * @since 2.10.0
 */
var mapFst = function (f) { return function (fa) { return [
    f(fst(fa)),
    snd(fa)
]; }; };
exports.mapFst = mapFst;
/**
 * Map a function over the second component of a `ReadonlyTuple`.
 *
 * This is the `mapLeft` operation of the `Bifunctor` instance.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var mapSnd = function (f) { return function (fa) { return [
    fst(fa),
    f(snd(fa))
]; }; };
exports.mapSnd = mapSnd;
/**
 * @category Semigroupoid
 * @since 2.5.0
 */
var compose = function (ab) { return function (bc) { return [
    fst(bc),
    snd(ab)
]; }; };
exports.compose = compose;
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (wa) { return [f(wa), snd(wa)]; }; };
exports.extend = extend;
/**
 * @category Extract
 * @since 2.6.2
 */
exports.extract = fst;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) { return function (fa) {
    return f(b, fst(fa));
}; };
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function () {
    return function (f) { return function (fa) { return f(fst(fa)); }; };
};
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return f(fst(fa), b);
}; };
exports.reduceRight = reduceRight;
/**
 * @since 2.6.3
 */
var traverse = function (F) {
    return function (f) { return function (ta) { return F.map(f(fst(ta)), function (b) { return [b, snd(ta)]; }); }; };
};
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return function (fas) {
    return F.map(fst(fas), function (a) { return [a, snd(fas)]; });
}; };
exports.sequence = sequence;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyTuple';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Semigroupoid = {
    URI: exports.URI,
    compose: _compose
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`mapFst`](#mapfst) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
exports.map = exports.mapFst;
/**
 * Use [`mapSnd`](#mapsnd) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
exports.mapLeft = exports.mapSnd;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyTuple = {
    URI: exports.URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract: exports.extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411553, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctorWithIndex = exports.flap = exports.Functor = exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.reduce = exports.partitionMap = exports.partition = exports.foldMap = exports.filterMap = exports.filter = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toArray = exports.collect = exports.keys = exports.isEmpty = exports.size = void 0;
exports.record = exports.hasOwnProperty = exports.insertAt = exports.empty = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.FoldableWithIndex = exports.Foldable = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var O = __importStar(require("./Option"));
var RR = __importStar(require("./ReadonlyRecord"));
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
/**
 * Calculate the number of key/value pairs in a `Record`.
 *
 * @since 2.0.0
 */
exports.size = RR.size;
/**
 * Test whether a `Record` is empty.
 *
 * @since 2.0.0
 */
exports.isEmpty = RR.isEmpty;
/**
 * @since 2.0.0
 */
exports.keys = RR.keys;
/**
 * Map a `Record` into an `Array`.
 *
 * @example
 * import { collect } from 'fp-ts/Record'
 *
 * const x: { readonly a: string, readonly b: boolean } = { a: 'c', b: false }
 * assert.deepStrictEqual(
 *   collect((key, val) => ({ key: key, value: val }))(x),
 *   [{ key: 'a', value: 'c' }, { key: 'b', value: false }]
 * )
 *
 * @since 2.0.0
 */
var collect = function (f) { return function (r) {
    var out = [];
    for (var _i = 0, _a = exports.keys(r); _i < _a.length; _i++) {
        var key = _a[_i];
        out.push(f(key, r[key]));
    }
    return out;
}; };
exports.collect = collect;
/**
 * Get a sorted `Array` of the key/value pairs contained in a `Record`.
 *
 * @since 2.0.0
 */
exports.toArray = 
/*#__PURE__*/
exports.collect(function (k, a) { return [k, a]; });
function toUnfoldable(U) {
    return function (r) {
        var sas = exports.toArray(r);
        var len = sas.length;
        return U.unfold(0, function (b) { return (b < len ? O.some([sas[b], b + 1]) : O.none); });
    };
}
exports.toUnfoldable = toUnfoldable;
/**
 * Insert or replace a key/value pair in a `Record`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.upsertAt = RR.upsertAt;
/**
 * Test whether or not a key exists in a `Record`.
 *
 * Note. This function is not pipeable because is a custom type guard.
 *
 * @since 2.10.0
 */
exports.has = RR.has;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function deleteAt(k) {
    return function (r) {
        if (!_hasOwnProperty.call(r, k)) {
            return r;
        }
        var out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
exports.deleteAt = deleteAt;
/**
 * @since 2.0.0
 */
var updateAt = function (k, a) {
    return exports.modifyAt(k, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * @since 2.0.0
 */
var modifyAt = function (k, f) { return function (r) {
    if (!exports.has(k, r)) {
        return O.none;
    }
    var out = Object.assign({}, r);
    out[k] = f(r[k]);
    return O.some(out);
}; };
exports.modifyAt = modifyAt;
function pop(k) {
    var deleteAtk = deleteAt(k);
    return function (r) {
        var oa = exports.lookup(k, r);
        return O.isNone(oa) ? O.none : O.some([oa.value, deleteAtk(r)]);
    };
}
exports.pop = pop;
// TODO: remove non-curried overloading in v3
/**
 * Test whether one `Record` contains all of the keys and values contained in another `Record`.
 *
 * @since 2.0.0
 */
exports.isSubrecord = RR.isSubrecord;
// TODO: remove non-curried overloading in v3
/**
 * Lookup the value for a key in a `Record`.
 *
 * @since 2.0.0
 */
exports.lookup = RR.lookup;
/**
 * Map a `Record` passing the keys to the iterating function.
 *
 * @since 2.0.0
 */
exports.mapWithIndex = RR.mapWithIndex;
/**
 * Map a `Record` passing the values to the iterating function.
 *
 * @since 2.0.0
 */
exports.map = RR.map;
/**
 * @since 2.0.0
 */
exports.reduceWithIndex = RR.reduceWithIndex;
/**
 * @since 2.0.0
 */
exports.foldMapWithIndex = RR.foldMapWithIndex;
/**
 * @since 2.0.0
 */
exports.reduceRightWithIndex = RR.reduceRightWithIndex;
/**
 * Create a `Record` with one key/value pair.
 *
 * @since 2.0.0
 */
exports.singleton = RR.singleton;
function traverseWithIndex(F) {
    return RR.traverseWithIndex(F);
}
exports.traverseWithIndex = traverseWithIndex;
function traverse(F) {
    return RR.traverse(F);
}
exports.traverse = traverse;
function sequence(F) {
    return RR.sequence(F);
}
exports.sequence = sequence;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
/**
 * @since 2.0.0
 */
exports.partitionMapWithIndex = RR.partitionMapWithIndex;
function partitionWithIndex(predicateWithIndex) {
    return RR.partitionWithIndex(predicateWithIndex);
}
exports.partitionWithIndex = partitionWithIndex;
/**
 * @since 2.0.0
 */
exports.filterMapWithIndex = RR.filterMapWithIndex;
function filterWithIndex(predicateWithIndex) {
    return RR.filterWithIndex(predicateWithIndex);
}
exports.filterWithIndex = filterWithIndex;
function fromFoldable(M, F) {
    return RR.fromFoldable(M, F);
}
exports.fromFoldable = fromFoldable;
function fromFoldableMap(M, F) {
    return RR.fromFoldableMap(M, F);
}
exports.fromFoldableMap = fromFoldableMap;
/**
 * @since 2.0.0
 */
exports.every = RR.every;
/**
 * @since 2.0.0
 */
exports.some = RR.some;
// TODO: remove non-curried overloading in v3
/**
 * @since 2.0.0
 */
exports.elem = RR.elem;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _filter = function (fa, predicate) { return function_1.pipe(fa, exports.filter(predicate)); };
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) { return function_1.pipe(fa, exports.partition(predicate)); };
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.partitionMapWithIndex(f)); };
/* istanbul ignore next */
var _partitionWithIndex = function (fa, predicateWithIndex) {
    return function_1.pipe(fa, partitionWithIndex(predicateWithIndex));
};
/* istanbul ignore next */
var _filterMapWithIndex = function (fa, f) {
    return function_1.pipe(fa, exports.filterMapWithIndex(f));
};
/* istanbul ignore next */
var _filterWithIndex = function (fa, predicateWithIndex) {
    return function_1.pipe(fa, filterWithIndex(predicateWithIndex));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Filterable
 * @since 2.0.0
 */
exports.filter = RR.filter;
/**
 * @category Filterable
 * @since 2.0.0
 */
exports.filterMap = RR.filterMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.foldMap = RR.foldMap;
/**
 * @category Filterable
 * @since 2.0.0
 */
exports.partition = RR.partition;
/**
 * @category Filterable
 * @since 2.0.0
 */
exports.partitionMap = RR.partitionMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduce = RR.reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduceRight = RR.reduceRight;
/**
 * @category Compactable
 * @since 2.0.0
 */
exports.compact = RR.compact;
/**
 * @category Compactable
 * @since 2.0.0
 */
exports.separate = RR.separate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Record';
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RR.getShow;
/**
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RR.getEq;
/**
 * Returns a `Monoid` instance for `Record`s given a `Semigroup` instance for their values.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 * import { getMonoid } from 'fp-ts/Record'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat({ foo: 123 }, { foo: 456 }), { foo: 579 })
 *
 * @category instances
 * @since 2.0.0
 */
exports.getMonoid = RR.getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use a new `{}` instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.empty = {};
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.insertAt = exports.upsertAt;
/**
 * Use [`has`](#has) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.hasOwnProperty = RR.hasOwnProperty;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.record = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: _traverseWithIndex,
    wither: _wither,
    wilt: _wilt
};

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478,"./ReadonlyRecord":1619349411550}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411554, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionRing = exports.getTupleRing = exports.negate = exports.tuple = void 0;
/**
 * The `Ring` class is for types that support addition, multiplication, and subtraction operations.
 *
 * Instances must satisfy the following law in addition to the `Semiring` laws:
 *
 * - Additive inverse: `a - a <-> (zero - a) + a <-> zero`
 *
 * Adapted from https://github.com/purescript/purescript-prelude/blob/master/src/Data/Ring.purs
 *
 * @since 2.0.0
 */
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Given a tuple of `Ring`s returns a `Ring` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Ring'
 * import * as N from 'fp-ts/number'
 *
 * const R = tuple(N.Field, N.Field, N.Field)
 * assert.deepStrictEqual(R.add([1, 2, 3], [4, 5, 6]), [5, 7, 9])
 * assert.deepStrictEqual(R.mul([1, 2, 3], [4, 5, 6]), [4, 10, 18])
 * assert.deepStrictEqual(R.one, [1, 1, 1])
 * assert.deepStrictEqual(R.sub([1, 2, 3], [4, 5, 6]), [-3, -3, -3])
 * assert.deepStrictEqual(R.zero, [0, 0, 0])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var rings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rings[_i] = arguments[_i];
    }
    return ({
        add: function (x, y) { return rings.map(function (R, i) { return R.add(x[i], y[i]); }); },
        zero: rings.map(function (R) { return R.zero; }),
        mul: function (x, y) { return rings.map(function (R, i) { return R.mul(x[i], y[i]); }); },
        one: rings.map(function (R) { return R.one; }),
        sub: function (x, y) { return rings.map(function (R, i) { return R.sub(x[i], y[i]); }); }
    });
};
exports.tuple = tuple;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * `negate x` can be used as a shorthand for `zero - x`
 *
 * @since 2.0.0
 */
var negate = function (R) { return function (a) { return R.sub(R.zero, a); }; };
exports.negate = negate;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleRing = exports.tuple;
/**
 * Use [`getRing`](./function.ts.html#getRing) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionRing = function_1.getRing;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411555, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411556, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionSemiring = void 0;
/**
 * The `Semiring` class is for types that support an addition and multiplication operation.
 *
 * Instances must satisfy the following laws:
 *
 * - Commutative monoid under addition:
 *   - Associativity: `(a + b) + c <-> a + (b + c)`
 *   - Identity: `zero + a = a + zero <-> a`
 *   - Commutative: `a + b <-> b + a`
 * - Monoid under multiplication:
 *   - Associativity: `(a * b) * c <-> a * (b * c)`
 *   - Identity: `one * a <-> a * one <-> a`
 * - Multiplication distributes over addition:
 *   - Left distributivity: `a * (b + c) <-> (a * b) + (a * c)`
 *   - Right distributivity: `(a + b) * c <-> (a * c) + (b * c)`
 * - Annihilation: `zero * a <-> a * zero <-> zero`
 *
 * **Note:** The `number` type is not fully law abiding members of this class hierarchy due to the potential
 * for arithmetic overflows, and the presence of `NaN` and `Infinity` values. The behaviour is
 * unspecified in these cases.
 *
 * @since 2.0.0
 */
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`getSemiring`](./function.ts.html#getSemiring) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionSemiring = function_1.getSemiring;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411557, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subset = exports.toArray = exports.elem = exports.isSubset = exports.every = exports.some = exports.size = exports.isEmpty = exports.empty = exports.filterMap = exports.separate = exports.compact = exports.fromArray = exports.toggle = exports.remove = exports.insert = exports.singleton = exports.foldMap = exports.reduce = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.difference = exports.partitionMap = exports.intersection = exports.union = exports.partition = exports.filter = exports.chain = exports.map = exports.getEq = exports.getShow = void 0;
/**
 * @since 2.0.0
 */
var Separated_1 = require("./Separated");
var function_1 = require("./function");
var RS = __importStar(require("./ReadonlySet"));
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RS.getShow;
/**
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RS.getEq;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category combinators
 * @since 2.0.0
 */
function map(E) {
    var elemE = exports.elem(E);
    return function (f) { return function (set) {
        var r = new Set();
        set.forEach(function (e) {
            var v = f(e);
            if (!elemE(v, r)) {
                r.add(v);
            }
        });
        return r;
    }; };
}
exports.map = map;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category combinators
 * @since 2.0.0
 */
function chain(E) {
    var elemE = exports.elem(E);
    return function (f) { return function (set) {
        var r = new Set();
        set.forEach(function (e) {
            f(e).forEach(function (e) {
                if (!elemE(e, r)) {
                    r.add(e);
                }
            });
        });
        return r;
    }; };
}
exports.chain = chain;
function filter(predicate) {
    return function (set) {
        var values = set.values();
        var e;
        var r = new Set();
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var value = e.value;
            if (predicate(value)) {
                r.add(value);
            }
        }
        return r;
    };
}
exports.filter = filter;
function partition(predicate) {
    return function (set) {
        var values = set.values();
        var e;
        var right = new Set();
        var left = new Set();
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var value = e.value;
            if (predicate(value)) {
                right.add(value);
            }
            else {
                left.add(value);
            }
        }
        return Separated_1.separated(left, right);
    };
}
exports.partition = partition;
function union(E) {
    var elemE = exports.elem(E);
    return function (me, that) {
        if (that === undefined) {
            var unionE_1 = union(E);
            return function (that) { return unionE_1(me, that); };
        }
        if (exports.isEmpty(me)) {
            return that;
        }
        if (exports.isEmpty(that)) {
            return me;
        }
        var r = new Set(me);
        that.forEach(function (e) {
            if (!elemE(e, r)) {
                r.add(e);
            }
        });
        return r;
    };
}
exports.union = union;
function intersection(E) {
    var elemE = exports.elem(E);
    return function (me, that) {
        if (that === undefined) {
            var intersectionE_1 = intersection(E);
            return function (that) { return intersectionE_1(that, me); };
        }
        if (exports.isEmpty(me) || exports.isEmpty(that)) {
            return new Set();
        }
        var r = new Set();
        me.forEach(function (e) {
            if (elemE(e, that)) {
                r.add(e);
            }
        });
        return r;
    };
}
exports.intersection = intersection;
/**
 * @since 2.0.0
 */
function partitionMap(EB, EC) {
    return function (f) { return function (set) {
        var values = set.values();
        var e;
        var left = new Set();
        var right = new Set();
        var hasB = exports.elem(EB);
        var hasC = exports.elem(EC);
        // tslint:disable-next-line: strict-boolean-expressions
        while (!(e = values.next()).done) {
            var v = f(e.value);
            switch (v._tag) {
                case 'Left':
                    if (!hasB(v.left, left)) {
                        left.add(v.left);
                    }
                    break;
                case 'Right':
                    if (!hasC(v.right, right)) {
                        right.add(v.right);
                    }
                    break;
            }
        }
        return Separated_1.separated(left, right);
    }; };
}
exports.partitionMap = partitionMap;
function difference(E) {
    var elemE = exports.elem(E);
    return function (me, that) {
        if (that === undefined) {
            var differenceE_1 = difference(E);
            return function (that) { return differenceE_1(that, me); };
        }
        return filter(function (a) { return !elemE(a, that); })(me);
    };
}
exports.difference = difference;
/**
 * @category instances
 * @since 2.0.0
 */
function getUnionMonoid(E) {
    return {
        concat: union(E),
        empty: new Set()
    };
}
exports.getUnionMonoid = getUnionMonoid;
/**
 * @category instances
 * @since 2.0.0
 */
function getIntersectionSemigroup(E) {
    return {
        concat: intersection(E)
    };
}
exports.getIntersectionSemigroup = getIntersectionSemigroup;
/**
 * @since 2.0.0
 */
exports.reduce = RS.reduce;
/**
 * @since 2.0.0
 */
exports.foldMap = RS.foldMap;
/**
 * Create a set with one element
 *
 * @category constructors
 * @since 2.0.0
 */
var singleton = function (a) { return new Set([a]); };
exports.singleton = singleton;
/**
 * Insert a value into a set
 *
 * @category combinators
 * @since 2.0.0
 */
function insert(E) {
    var elemE = exports.elem(E);
    return function (a) { return function (set) {
        if (!elemE(a)(set)) {
            var r = new Set(set);
            r.add(a);
            return r;
        }
        else {
            return set;
        }
    }; };
}
exports.insert = insert;
/**
 * Delete a value from a set
 *
 * @category combinators
 * @since 2.0.0
 */
var remove = function (E) { return function (a) { return function (set) { return filter(function (ax) { return !E.equals(a, ax); })(set); }; }; };
exports.remove = remove;
/**
 * Checks an element is a member of a set;
 * If yes, removes the value from the set
 * If no, inserts the value to the set
 *
 * @category combinators
 * @since 2.5.0
 */
var toggle = function (E) {
    var elemE = exports.elem(E);
    var removeE = exports.remove(E);
    var insertE = insert(E);
    return function (a) { return function (set) { return (elemE(a, set) ? removeE : insertE)(a)(set); }; };
};
exports.toggle = toggle;
/**
 * Create a set from an array
 *
 * @category constructors
 * @since 2.0.0
 */
var fromArray = function (E) { return function (as) {
    var len = as.length;
    var out = new Set();
    var has = exports.elem(E);
    for (var i = 0; i < len; i++) {
        var a = as[i];
        if (!has(a, out)) {
            out.add(a);
        }
    }
    return out;
}; };
exports.fromArray = fromArray;
/**
 * @category combinators
 * @since 2.0.0
 */
var compact = function (E) { return filterMap(E)(function_1.identity); };
exports.compact = compact;
/**
 * @since 2.0.0
 */
function separate(EE, EA) {
    return function (fa) {
        var elemEE = exports.elem(EE);
        var elemEA = exports.elem(EA);
        var left = new Set();
        var right = new Set();
        fa.forEach(function (e) {
            switch (e._tag) {
                case 'Left':
                    if (!elemEE(e.left, left)) {
                        left.add(e.left);
                    }
                    break;
                case 'Right':
                    if (!elemEA(e.right, right)) {
                        right.add(e.right);
                    }
                    break;
            }
        });
        return Separated_1.separated(left, right);
    };
}
exports.separate = separate;
/**
 * @category combinators
 * @since 2.0.0
 */
function filterMap(E) {
    var elemE = exports.elem(E);
    return function (f) { return function (fa) {
        var r = new Set();
        fa.forEach(function (a) {
            var ob = f(a);
            if (ob._tag === 'Some' && !elemE(ob.value, r)) {
                r.add(ob.value);
            }
        });
        return r;
    }; };
}
exports.filterMap = filterMap;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
exports.empty = new Set();
/**
 * Test whether a `Set` is empty.
 *
 * @since 2.10.0
 */
var isEmpty = function (set) { return set.size === 0; };
exports.isEmpty = isEmpty;
/**
 * Calculate the number of elements in a `Set`.
 *
 * @since 2.10.0
 */
var size = function (set) { return set.size; };
exports.size = size;
/**
 * @since 2.0.0
 */
exports.some = RS.some;
/**
 * @since 2.0.0
 */
exports.every = RS.every;
/**
 * @since 2.10.0
 */
exports.isSubset = RS.isSubset;
// TODO: remove non-curried overloading in v3
/**
 * Test if a value is a member of a set
 *
 * @since 2.0.0
 */
exports.elem = RS.elem;
/**
 * Get a sorted `Array` of the values contained in a `Set`.
 *
 * @since 2.0.0
 */
var toArray = function (O) { return function (set) {
    var out = [];
    set.forEach(function (e) { return out.push(e); });
    return out.sort(O.compare);
}; };
exports.toArray = toArray;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`isSubset`](#issubset) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.subset = RS.isSubset;

}, function(modId) { var map = {"./Separated":1619349411479,"./function":1619349411472,"./ReadonlySet":1619349411551}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411558, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.state = exports.execState = exports.evalState = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.execute = exports.evaluate = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = exports.gets = exports.modify = exports.put = exports.get = void 0;
var Apply_1 = require("./Apply");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Chain_1 = require("./Chain");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var get = function () { return function (s) { return [s, s]; }; };
exports.get = get;
/**
 * Set the state
 *
 * @category constructors
 * @since 2.0.0
 */
var put = function (s) { return function () { return [undefined, s]; }; };
exports.put = put;
/**
 * Modify the state by applying a function to the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var modify = function (f) { return function (s) { return [undefined, f(s)]; }; };
exports.modify = modify;
/**
 * Get a value which depends on the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var gets = function (f) { return function (s) { return [f(s), s]; }; };
exports.gets = gets;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return function (s1) {
    var _a = fa(s1), a = _a[0], s2 = _a[1];
    return [f(a), s2];
}; }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return function (s1) {
    var _a = fab(s1), f = _a[0], s2 = _a[1];
    var _b = fa(s2), a = _b[0], s3 = _b[1];
    return [f(a), s3];
}; }; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.0.0
 */
var of = function (a) { return function (s) { return [a, s]; }; };
exports.of = of;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) { return function (s1) {
    var _a = ma(s1), a = _a[0], s2 = _a[1];
    return f(a)(s2);
}; }; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'State';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @since 2.8.0
 */
var evaluate = function (s) { return function (ma) { return ma(s)[0]; }; };
exports.evaluate = evaluate;
/**
 * Run a computation in the `State` monad discarding the result
 *
 * @since 2.8.0
 */
var execute = function (s) { return function (ma) { return ma(s)[1]; }; };
exports.execute = execute;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function (s) {
    var lastState = s;
    var values = [];
    for (var i = 0; i < as.length; i++) {
        var _a = f(i, as[i])(lastState), newValue = _a[0], newState = _a[1];
        values.push(newValue);
        lastState = newState;
    }
    return [values, lastState];
}; }; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @since 2.0.0
 * @deprecated
 */
var evalState = function (ma, s) { return ma(s)[0]; };
exports.evalState = evalState;
/**
 * Use [`execute`](#execute) instead
 *
 * @since 2.0.0
 * @deprecated
 */
var execState = function (ma, s) { return ma(s)[1]; };
exports.execState = execState;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.state = exports.Monad;

}, function(modId) { var map = {"./Apply":1619349411471,"./function":1619349411472,"./Functor":1619349411473,"./Chain":1619349411475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411559, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.throwError = exports.alt = exports.altW = exports.flatten = exports.chainW = exports.chain = exports.of = exports.apW = exports.ap = exports.mapLeft = exports.bimap = exports.map = exports.chainReaderTaskEitherK = exports.chainReaderTaskEitherKW = exports.fromReaderTaskEitherK = exports.chainTaskEitherK = exports.chainTaskEitherKW = exports.fromTaskEitherK = exports.chainIOEitherK = exports.chainIOEitherKW = exports.fromIOEitherK = exports.fromState = exports.fromTask = exports.fromIO = exports.fromEither = exports.gets = exports.modify = exports.put = exports.get = exports.fromReaderTaskEither = exports.leftState = exports.rightState = exports.leftIO = exports.rightIO = exports.fromReaderEither = exports.fromIOEither = exports.leftReader = exports.rightReader = exports.fromTaskEither = exports.leftTask = exports.rightTask = exports.right = exports.left = void 0;
exports.run = exports.execState = exports.evalState = exports.stateReaderTaskEitherSeq = exports.stateReaderTaskEither = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.execute = exports.evaluate = exports.chainFirstTaskK = exports.chainTaskK = exports.fromTaskK = exports.FromTask = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.fromEitherK = exports.filterOrElseW = exports.filterOrElse = exports.fromPredicate = exports.chainEitherKW = exports.chainEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromOption = exports.FromEither = exports.Alt = exports.Bifunctor = exports.chainFirstW = exports.chainFirst = exports.MonadThrow = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Chain = exports.Applicative = void 0;
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var E = __importStar(require("./Either"));
var FromEither_1 = require("./FromEither");
var FromIO_1 = require("./FromIO");
var FromTask_1 = require("./FromTask");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var RTE = __importStar(require("./ReaderTaskEither"));
var ST = __importStar(require("./StateT"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
var left = function (e) { return function () { return RTE.left(e); }; };
exports.left = left;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.right = 
/*#__PURE__*/
ST.of(RTE.Pointed);
/**
 * @category constructors
 * @since 2.0.0
 */
function rightTask(ma) {
    return exports.fromReaderTaskEither(RTE.rightTask(ma));
}
exports.rightTask = rightTask;
/**
 * @category constructors
 * @since 2.0.0
 */
function leftTask(me) {
    return exports.fromReaderTaskEither(RTE.leftTask(me));
}
exports.leftTask = leftTask;
/**
 * @category constructors
 * @since 2.0.0
 */
function fromTaskEither(ma) {
    return exports.fromReaderTaskEither(RTE.fromTaskEither(ma));
}
exports.fromTaskEither = fromTaskEither;
/**
 * @category constructors
 * @since 2.0.0
 */
function rightReader(ma) {
    return exports.fromReaderTaskEither(RTE.rightReader(ma));
}
exports.rightReader = rightReader;
/**
 * @category constructors
 * @since 2.0.0
 */
function leftReader(me) {
    return exports.fromReaderTaskEither(RTE.leftReader(me));
}
exports.leftReader = leftReader;
/**
 * @category constructors
 * @since 2.0.0
 */
function fromIOEither(ma) {
    return exports.fromReaderTaskEither(RTE.fromIOEither(ma));
}
exports.fromIOEither = fromIOEither;
/**
 * @category constructors
 * @since 2.0.0
 */
function fromReaderEither(ma) {
    return exports.fromReaderTaskEither(RTE.fromReaderEither(ma));
}
exports.fromReaderEither = fromReaderEither;
/**
 * @category constructors
 * @since 2.0.0
 */
function rightIO(ma) {
    return exports.fromReaderTaskEither(RTE.rightIO(ma));
}
exports.rightIO = rightIO;
/**
 * @category constructors
 * @since 2.0.0
 */
function leftIO(me) {
    return exports.fromReaderTaskEither(RTE.leftIO(me));
}
exports.leftIO = leftIO;
/**
 * @category constructors
 * @since 2.0.0
 */
var rightState = function (sa) {
    return function_1.flow(sa, RTE.right);
};
exports.rightState = rightState;
/**
 * @category constructors
 * @since 2.0.0
 */
var leftState = function (me) { return function (s) { return RTE.left(me(s)[0]); }; };
exports.leftState = leftState;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromReaderTaskEither = 
/*#__PURE__*/
ST.fromF(RTE.Functor);
/**
 * Get the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var get = function () { return function (s) { return RTE.of([s, s]); }; };
exports.get = get;
/**
 * Set the state
 *
 * @category constructors
 * @since 2.0.0
 */
var put = function (s) { return function () { return RTE.of([undefined, s]); }; };
exports.put = put;
/**
 * Modify the state by applying a function to the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var modify = function (f) { return function (s) {
    return RTE.of([undefined, f(s)]);
}; };
exports.modify = modify;
/**
 * Get a value which depends on the current state
 *
 * @category constructors
 * @since 2.0.0
 */
var gets = function (f) { return function (s) {
    return RTE.of([f(s), s]);
}; };
exports.gets = gets;
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = 
/*#__PURE__*/
E.match(function (e) { return exports.left(e); }, exports.right);
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromIO = rightIO;
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromTask = rightTask;
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromState = 
/*#__PURE__*/
ST.fromState(RTE.Pointed);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.4.0
 */
var fromIOEitherK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return fromIOEither(f.apply(void 0, a));
}; };
exports.fromIOEitherK = fromIOEitherK;
/**
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
var chainIOEitherKW = function (f) { return function (ma) { return function_1.pipe(ma, exports.chainW(exports.fromIOEitherK(f))); }; };
exports.chainIOEitherKW = chainIOEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainIOEitherK = exports.chainIOEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
var fromTaskEitherK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return fromTaskEither(f.apply(void 0, a));
}; };
exports.fromTaskEitherK = fromTaskEitherK;
/**
 * Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
var chainTaskEitherKW = function (f) { return function (ma) { return function_1.pipe(ma, exports.chainW(exports.fromTaskEitherK(f))); }; };
exports.chainTaskEitherKW = chainTaskEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainTaskEitherK = exports.chainTaskEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
function fromReaderTaskEitherK(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return exports.fromReaderTaskEither(f.apply(void 0, a));
    };
}
exports.fromReaderTaskEitherK = fromReaderTaskEitherK;
/**
 * Less strict version of [`chainReaderTaskEitherK`](#chainreadertaskeitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
var chainReaderTaskEitherKW = function (f) { return function (ma) { return function_1.pipe(ma, exports.chainW(fromReaderTaskEitherK(f))); }; };
exports.chainReaderTaskEitherKW = chainReaderTaskEitherKW;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainReaderTaskEitherK = exports.chainReaderTaskEitherKW;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function (s) {
    return function_1.pipe(fa(s), RTE.alt(function () { return that()(s); }));
}; };
var _bimap = function (fea, f, g) { return function (s) {
    return function_1.pipe(fea(s), RTE.bimap(f, function (_a) {
        var a = _a[0], s = _a[1];
        return [g(a), s];
    }));
}; };
var _mapLeft = function (fea, f) { return function (s) { return function_1.pipe(fea(s), RTE.mapLeft(f)); }; };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
exports.map = 
/*#__PURE__*/
ST.map(RTE.Functor);
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */
var bimap = function (f, g) { return function (fa) {
    return _bimap(fa, f, g);
}; };
exports.bimap = bimap;
/**
 * Map a function over the third type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.6.2
 */
var mapLeft = function (f) { return function (fa) {
    return _mapLeft(fa, f);
}; };
exports.mapLeft = mapLeft;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
exports.ap = 
/*#__PURE__*/
ST.ap(RTE.Chain);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
exports.apW = exports.ap;
/**
 * @category Pointed
 * @since 2.7.0
 */
exports.of = exports.right;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
exports.chain = 
/*#__PURE__*/
ST.chain(RTE.Chain);
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
exports.chainW = exports.chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) { return function (r) {
    return function_1.pipe(fa(r), RTE.altW(function () { return that()(r); }));
}; }; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
exports.alt = exports.altW;
/**
 * @category MonadThrow
 * @since 2.7.0
 */
exports.throwError = exports.left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'StateReaderTaskEither';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadTask = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
exports.chainFirstW = exports.chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
/**
 * @category constructors
 * @since 2.0.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainOptionK = 
/*#__PURE__*/
FromEither_1.chainOptionK(exports.FromEither, exports.Chain);
/**
 * @category combinators
 * @since 2.4.0
 */
exports.chainEitherK = 
/*#__PURE__*/
FromEither_1.chainEitherK(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * @category combinators
 * @since 2.6.1
 */
exports.chainEitherKW = exports.chainEitherK;
/**
 * @category constructors
 * @since 2.4.4
 */
exports.fromPredicate = 
/*#__PURE__*/
FromEither_1.fromPredicate(exports.FromEither);
/**
 * @category combinators
 * @since 2.4.4
 */
exports.filterOrElse = 
/*#__PURE__*/
FromEither_1.filterOrElse(exports.FromEither, exports.Chain);
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
exports.filterOrElseW = exports.filterOrElse;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.fromEitherK = 
/*#__PURE__*/
FromEither_1.fromEitherK(exports.FromEither);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: exports.URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromTaskK = 
/*#__PURE__*/
FromTask_1.fromTaskK(exports.FromTask);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainTaskK = 
/*#__PURE__*/
FromTask_1.chainTaskK(exports.FromTask, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstTaskK = 
/*#__PURE__*/
FromTask_1.chainFirstTaskK(exports.FromTask, exports.Chain);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Run a computation in the `StateReaderTaskEither` monad, discarding the final state
 *
 * @since 2.8.0
 */
exports.evaluate = 
/*#__PURE__*/
ST.evaluate(RTE.Functor);
/**
 * Run a computation in the `StateReaderTaskEither` monad discarding the result
 *
 * @since 2.8.0
 */
exports.execute = 
/*#__PURE__*/
ST.execute(RTE.Functor);
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
/**
 * @since 2.8.0
 */
exports.bindW = exports.bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
/**
 * @since 2.8.0
 */
exports.apSW = exports.apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function (s) { return function (r) { return function () {
    return as.reduce(function (acc, a, i) {
        return acc.then(function (ebs) {
            return E.isLeft(ebs)
                ? acc
                : f(i, a)(ebs.right[1])(r)().then(function (eb) {
                    if (E.isLeft(eb)) {
                        return eb;
                    }
                    var _a = eb.right, b = _a[0], s = _a[1];
                    ebs.right[0].push(b);
                    ebs.right[1] = s;
                    return ebs;
                });
        });
    }, Promise.resolve(E.right([[], s])));
}; }; }; }; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return exports.traverseArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.stateReaderTaskEither = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask,
    throwError: exports.throwError
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.stateReaderTaskEitherSeq = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask,
    throwError: exports.throwError
};
/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @since 2.0.0
 * @deprecated
 */
/* istanbul ignore next */
var evalState = function (fsa, s) {
    return function_1.pipe(fsa(s), RTE.map(function (_a) {
        var a = _a[0];
        return a;
    }));
};
exports.evalState = evalState;
/**
 * Use [`execute`](#execute) instead
 *
 * @since 2.0.0
 * @deprecated
 */
/* istanbul ignore next */
var execState = function (fsa, s) {
    return function_1.pipe(fsa(s), RTE.map(function (_a) {
        var _ = _a[0], s = _a[1];
        return s;
    }));
};
exports.execState = execState;
/**
 * @since 2.0.0
 * @deprecated
 */
/* istanbul ignore next */
function run(ma, s, r) {
    return ma(s)(r)();
}
exports.run = run;

}, function(modId) { var map = {"./Apply":1619349411471,"./Chain":1619349411475,"./Either":1619349411507,"./FromEither":1619349411514,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./ReaderTaskEither":1619349411548,"./StateT":1619349411560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411560, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateM = exports.execute = exports.evaluate = exports.fromF = exports.fromState = exports.chain = exports.ap = exports.map = exports.of = void 0;
var function_1 = require("./function");
var ReadonlyTuple_1 = require("./ReadonlyTuple");
function of(F) {
    return function (a) { return function (s) { return F.of([a, s]); }; };
}
exports.of = of;
function map(F) {
    return function (f) { return function (fa) { return function (s) { return F.map(fa(s), function (_a) {
        var a = _a[0], s1 = _a[1];
        return [f(a), s1];
    }); }; }; };
}
exports.map = map;
function ap(M) {
    return function (fa) { return function (fab) { return function (s) { return M.chain(fab(s), function (_a) {
        var f = _a[0], s = _a[1];
        return M.map(fa(s), function (_a) {
            var a = _a[0], s = _a[1];
            return [f(a), s];
        });
    }); }; }; };
}
exports.ap = ap;
function chain(M) {
    return function (f) { return function (ma) { return function (s) { return M.chain(ma(s), function (_a) {
        var a = _a[0], s1 = _a[1];
        return f(a)(s1);
    }); }; }; };
}
exports.chain = chain;
function fromState(F) {
    return function (sa) { return function (s) { return F.of(sa(s)); }; };
}
exports.fromState = fromState;
function fromF(F) {
    return function (ma) { return function (s) { return F.map(ma, function (a) { return [a, s]; }); }; };
}
exports.fromF = fromF;
function evaluate(F) {
    return function (s) { return function (ma) { return F.map(ma(s), function (_a) {
        var a = _a[0];
        return a;
    }); }; };
}
exports.evaluate = evaluate;
function execute(F) {
    return function (s) { return function (ma) { return F.map(ma(s), ReadonlyTuple_1.snd); }; };
}
exports.execute = execute;
/** @deprecated */
/* istanbul ignore next */
function getStateM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    var _evaluate = evaluate(M);
    var _execute = execute(M);
    return {
        map: function (fa, f) { return function_1.pipe(fa, _map(f)); },
        ap: function (fab, fa) { return function_1.pipe(fab, _ap(fa)); },
        of: of(M),
        chain: function (ma, f) { return function_1.pipe(ma, _chain(f)); },
        get: function () { return function (s) { return M.of([s, s]); }; },
        put: function (s) { return function () { return M.of([undefined, s]); }; },
        modify: function (f) { return function (s) { return M.of([undefined, f(s)]); }; },
        gets: function (f) { return function (s) { return M.of([f(s), s]); }; },
        fromState: fromState(M),
        fromM: fromF(M),
        evalState: function (fa, s) { return function_1.pipe(fa, _evaluate(s)); },
        execState: function (fa, s) { return function_1.pipe(fa, _execute(s)); }
    };
}
exports.getStateM = getStateM;

}, function(modId) { var map = {"./function":1619349411472,"./ReadonlyTuple":1619349411552}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411561, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.Comonad = exports.flap = exports.Functor = exports.URI = exports.map = exports.duplicate = exports.extract = exports.extend = exports.experiment = exports.peeks = exports.seeks = exports.seek = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
/**
 * Reposition the focus at the specified position
 *
 * @since 2.0.0
 */
function seek(s) {
    return function (wa) { return ({ peek: wa.peek, pos: s }); };
}
exports.seek = seek;
/**
 * Reposition the focus at the specified position, which depends on the current position
 *
 * @since 2.0.0
 */
function seeks(f) {
    return function (wa) { return ({ peek: wa.peek, pos: f(wa.pos) }); };
}
exports.seeks = seeks;
/**
 * Extract a value from a position which depends on the current position
 *
 * @since 2.0.0
 */
function peeks(f) {
    return function (wa) { return wa.peek(f(wa.pos)); };
}
exports.peeks = peeks;
function experiment(F) {
    return function (f) { return function (wa) { return F.map(f(wa.pos), function (s) { return wa.peek(s); }); }; };
}
exports.experiment = experiment;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) { return ({
    peek: function (s) { return f({ peek: wa.peek, pos: s }); },
    pos: wa.pos
}); }; };
exports.extend = extend;
/**
 * @category Extract
 * @since 2.6.2
 */
var extract = function (wa) { return wa.peek(wa.pos); };
exports.extract = extract;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return ({
    peek: function (s) { return f(fa.peek(s)); },
    pos: fa.pos
}); }; };
exports.map = map;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Store';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.store = exports.Comonad;

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411562, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.size = exports.isEmpty = exports.empty = exports.Show = exports.Ord = exports.Monoid = exports.Semigroup = exports.Eq = void 0;
/**
 * @since 2.10.0
 */
var E = __importStar(require("./Eq"));
var M = __importStar(require("./Monoid"));
var S = __importStar(require("./Semigroup"));
var O = __importStar(require("./Ord"));
var Sh = __importStar(require("./Show"));
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Eq = E.eqString;
/**
 * `string` semigroup under concatenation.
 *
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Semigroup.concat('a', 'b'), 'ab')
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Semigroup = S.semigroupString;
/**
 * `string` monoid under concatenation.
 *
 * The `empty` value is `''`.
 *
 * @example
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(S.Monoid.concat('a', 'b'), 'ab')
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Monoid = M.monoidString;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Ord = O.ordString;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Show = Sh.showString;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * An empty `string`.
 *
 * @since 2.10.0
 */
exports.empty = '';
/**
 * Test whether a `string` is empty.
 *
 * @since 2.10.0
 */
var isEmpty = function (s) { return s.length === 0; };
exports.isEmpty = isEmpty;
/**
 * Calculate the number of characters in a `string`.
 *
 * @since 2.10.0
 */
var size = function (s) { return s.length; };
exports.size = size;

}, function(modId) { var map = {"./Eq":1619349411481,"./Monoid":1619349411489,"./Semigroup":1619349411483,"./Ord":1619349411480,"./Show":1619349411488}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411563, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.fanout = exports.splitStrong = exports.fanOut = exports.split = void 0;
var function_1 = require("./function");
function split(S, C) {
    return function (pab, pcd) {
        return C.compose(S.second(pcd), S.first(pab));
    };
}
exports.split = split;
function fanOut(S, C) {
    var splitSC = split(S, C);
    return function (pab, pac) {
        return C.compose(splitSC(pab, pac), S.promap(C.id(), function_1.identity, function (a) { return [a, a]; }));
    };
}
exports.fanOut = fanOut;
function splitStrong(F) {
    return split(F, F);
}
exports.splitStrong = splitStrong;
function fanout(F) {
    return fanOut(F, F);
}
exports.fanout = fanout;

}, function(modId) { var map = {"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411564, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssignSemigroup = void 0;
/**
 * @since 2.10.0
 */
var Semigroup_1 = require("./Semigroup");
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * Return a semigroup which works like `Object.assign`.
 *
 * @example
 * import { getAssignSemigroup } from 'fp-ts/struct'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 *
 * const S = getAssignSemigroup<Person>()
 * assert.deepStrictEqual(S.concat({ name: 'name', age: 23 }, { name: 'name', age: 24 }), { name: 'name', age: 24 })
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.getAssignSemigroup = Semigroup_1.getObjectSemigroup;

}, function(modId) { var map = {"./Semigroup":1619349411483}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411565, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monad = exports.Alternative = exports.Alt = exports.chainFirst = exports.Chain = exports.ApplicativeSeq = exports.ApplySeq = exports.ApplicativePar = exports.apSecond = exports.apFirst = exports.ApplyPar = exports.Pointed = exports.flap = exports.Functor = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.separate = exports.compact = exports.none = exports.zero = exports.altW = exports.alt = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = exports.chainOptionK = exports.fromOptionK = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.getOrElseW = exports.getOrElse = exports.foldW = exports.matchEW = exports.fold = exports.matchE = exports.matchW = exports.match = exports.fromTask = exports.fromIO = exports.fromEither = exports.fromPredicate = exports.fromOption = exports.some = void 0;
exports.sequenceSeqArray = exports.traverseSeqArray = exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.chainFirstTaskK = exports.chainTaskK = exports.fromTaskK = exports.FromTask = exports.chainFirstIOK = exports.chainIOK = exports.fromIOK = exports.FromIO = exports.Filterable = exports.Compactable = exports.MonadTask = exports.MonadIO = void 0;
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var Compactable_1 = require("./Compactable");
var Filterable_1 = require("./Filterable");
var FromIO_1 = require("./FromIO");
var FromTask_1 = require("./FromTask");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var O = __importStar(require("./Option"));
var OT = __importStar(require("./OptionT"));
var T = __importStar(require("./Task"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */
exports.some = 
/*#__PURE__*/
OT.some(T.Pointed);
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromOption = T.of;
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromPredicate = 
/*#__PURE__*/
OT.fromPredicate(T.Pointed);
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromEither = 
/*#__PURE__*/
OT.fromEither(T.Pointed);
/**
 * @category constructors
 * @since 2.10.0
 */
var fromIO = function (ma) { return exports.fromTask(T.fromIO(ma)); };
exports.fromIO = fromIO;
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromTask = 
/*#__PURE__*/
OT.fromF(T.Functor);
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = 
/*#__PURE__*/
OT.match(T.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchW = exports.match;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.matchE = 
/*#__PURE__*/
OT.matchE(T.Chain);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.fold = exports.matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchEW = exports.matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchEW;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.getOrElse = 
/*#__PURE__*/
OT.getOrElse(T.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.getOrElseW = exports.getOrElse;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.10.0
 */
exports.fromNullable = 
/*#__PURE__*/
OT.fromNullable(T.Pointed);
/**
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Option` instead.
 *
 * Note: `f` should never `throw` errors, they are not caught.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatch = function (f) { return function () {
    return f().then(function (a) { return O.some(a); }, function () { return O.none; });
}; };
exports.tryCatch = tryCatch;
/**
 * Converts a function returning a `Promise` to one returning a `TaskOption`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.tryCatch(function () { return f.apply(void 0, a); });
}; };
exports.tryCatchK = tryCatchK;
/**
 * @category interop
 * @since 2.10.0
 */
exports.fromNullableK = 
/*#__PURE__*/
OT.fromNullableK(T.Pointed);
/**
 * @category interop
 * @since 2.10.0
 */
exports.chainNullableK = 
/*#__PURE__*/
OT.chainNullableK(T.Monad);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
OT.fromOptionK(T.Pointed);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainOptionK = 
/*#__PURE__*/
OT.chainOptionK(T.Monad);
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */
exports.map = 
/*#__PURE__*/
OT.map(T.Functor);
/**
 * @category Apply
 * @since 2.10.0
 */
exports.ap = 
/*#__PURE__*/
OT.ap(T.ApplyPar);
/**
 * @category Pointed
 * @since 2.10.0
 */
exports.of = exports.some;
/**
 * @category Monad
 * @since 2.10.0
 */
exports.chain = 
/*#__PURE__*/
OT.chain(T.Monad);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category Alt
 * @since 2.10.0
 */
exports.alt = 
/*#__PURE__*/
OT.alt(T.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.10.0
 */
exports.altW = exports.alt;
/**
 * @category Alternative
 * @since 2.10.0
 */
exports.zero = 
/*#__PURE__*/
OT.zero(T.Pointed);
/**
 * @category constructors
 * @since 2.10.0
 */
exports.none = 
/*#__PURE__*/
exports.zero();
/**
 * @category Compactable
 * @since 2.10.0
 */
exports.compact = 
/*#__PURE__*/
Compactable_1.compact(T.Functor, O.Compactable);
/**
 * @category Compactable
 * @since 2.10.0
 */
exports.separate = 
/*#__PURE__*/
Compactable_1.separate(T.Functor, O.Compactable, O.Functor);
/**
 * @category Filterable
 * @since 2.10.0
 */
exports.filter = 
/*#__PURE__*/
Filterable_1.filter(T.Functor, O.Filterable);
/**
 * @category Filterable
 * @since 2.10.0
 */
exports.filterMap = 
/*#__PURE__*/
Filterable_1.filterMap(T.Functor, O.Filterable);
/**
 * @category Filterable
 * @since 2.10.0
 */
exports.partition = 
/*#__PURE__*/
Filterable_1.partition(T.Functor, O.Filterable);
/**
 * @category Filterable
 * @since 2.10.0
 */
exports.partitionMap = 
/*#__PURE__*/
Filterable_1.partitionMap(T.Functor, O.Filterable);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _filter = function (fa, predicate) {
    return function_1.pipe(fa, exports.filter(predicate));
};
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/**
 * @category instances
 * @since 2.10.0
 */
var URI = 'TaskOption';
/**
 * @category instances
 * @since 2.10.0
 */
exports.Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplyPar = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.ApplyPar);
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplicativePar = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
var _apSeq = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplySeq = {
    URI: URI,
    map: _map,
    ap: _apSeq
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.ApplicativeSeq = {
    URI: URI,
    map: _map,
    ap: _apSeq,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Alternative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadIO = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.MonadTask = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Compactable = {
    URI: URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Filterable = {
    URI: URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainIOK = 
/*#__PURE__*/
FromIO_1.chainIOK(exports.FromIO, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstIOK = 
/*#__PURE__*/
FromIO_1.chainFirstIOK(exports.FromIO, exports.Chain);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromTaskK = 
/*#__PURE__*/
FromTask_1.fromTaskK(exports.FromTask);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainTaskK = 
/*#__PURE__*/
FromTask_1.chainTaskK(exports.FromTask, exports.Chain);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.chainFirstTaskK = 
/*#__PURE__*/
FromTask_1.chainFirstTaskK(exports.FromTask, exports.Chain);
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.10.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.10.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.ApplyPar);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.10.0
 */
var traverseArrayWithIndex = function (f) { return function_1.flow(T.traverseArrayWithIndex(f), T.map(O.sequenceArray)); };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativePar)`.
 *
 * @since 2.10.0
 */
var traverseArray = function (f) { return exports.traverseArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativePar)`.
 *
 * @since 2.10.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.10.0
 */
var traverseSeqArrayWithIndex = function (f) { return function (as) { return function () {
    return as.reduce(function (acc, a, i) {
        return acc.then(function (obs) {
            return O.isNone(obs)
                ? acc
                : f(i, a)().then(function (ob) {
                    if (O.isNone(ob)) {
                        return ob;
                    }
                    obs.value.push(ob.value);
                    return obs;
                });
        });
    }, Promise.resolve(O.some([])));
}; }; };
exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.10.0
 */
var traverseSeqArray = function (f) { return exports.traverseSeqArrayWithIndex(function (_, a) { return f(a); }); };
exports.traverseSeqArray = traverseSeqArray;
/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.10.0
 */
exports.sequenceSeqArray = 
/*#__PURE__*/
exports.traverseSeqArray(function_1.identity);

}, function(modId) { var map = {"./Apply":1619349411471,"./Chain":1619349411475,"./Compactable":1619349411502,"./Filterable":1619349411510,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478,"./OptionT":1619349411537,"./Task":1619349411547}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411566, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSemigroup = exports.taskThese = exports.toTuple = exports.bifunctorTaskThese = exports.functorTaskThese = exports.toTuple2 = exports.fromTaskK = exports.FromTask = exports.fromIOK = exports.FromIO = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.FromEither = exports.Bifunctor = exports.Pointed = exports.flap = exports.Functor = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.URI = exports.of = exports.mapLeft = exports.bimap = exports.map = exports.swap = exports.foldW = exports.matchEW = exports.fold = exports.matchE = exports.matchW = exports.match = exports.fromEither = exports.fromTask = exports.fromIO = exports.fromIOEither = exports.leftIO = exports.rightIO = exports.leftTask = exports.rightTask = exports.both = exports.right = exports.left = void 0;
var Apply_1 = require("./Apply");
var FromEither_1 = require("./FromEither");
var FromIO_1 = require("./FromIO");
var FromTask_1 = require("./FromTask");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var T = __importStar(require("./Task"));
var TH = __importStar(require("./These"));
var TT = __importStar(require("./TheseT"));
/**
 * @category constructors
 * @since 2.4.0
 */
exports.left = 
/*#__PURE__*/
TT.left(T.Pointed);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.right = 
/*#__PURE__*/
TT.right(T.Pointed);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.both = 
/*#__PURE__*/
TT.both(T.Pointed);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.rightTask = 
/*#__PURE__*/
TT.rightF(T.Functor);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.leftTask = 
/*#__PURE__*/
TT.leftF(T.Functor);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.rightIO = 
/*#__PURE__*/
function_1.flow(T.fromIO, exports.rightTask);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.leftIO = 
/*#__PURE__*/
function_1.flow(T.fromIO, exports.leftTask);
/**
 * @category constructors
 * @since 2.4.0
 */
exports.fromIOEither = 
/*#__PURE__*/
T.fromIO;
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromIO = exports.rightIO;
/**
 * @category constructors
 * @since 2.7.0
 */
exports.fromTask = exports.rightTask;
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromEither = T.of;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = 
/*#__PURE__*/
TT.match(T.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchW = exports.match;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.matchE = 
/*#__PURE__*/
TT.matchE(T.Monad);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.4.0
 */
exports.fold = exports.matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.matchEW = exports.fold;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchEW;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.4.0
 */
exports.swap = 
/*#__PURE__*/
TT.swap(T.Functor);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.4.0
 */
exports.map = 
/*#__PURE__*/
TT.map(T.Functor);
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.4.0
 */
exports.bimap = 
/*#__PURE__*/
TT.bimap(T.Functor);
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.4.0
 */
exports.mapLeft = 
/*#__PURE__*/
TT.mapLeft(T.Functor);
/**
 * @category Pointed
 * @since 2.7.0
 */
exports.of = exports.right;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.4.0
 */
exports.URI = 'TaskThese';
/**
 * @category instances
 * @since 2.10.0
 */
var getApply = function (A, S) {
    var ap = TT.ap(A, S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return function_1.pipe(fab, ap(fa)); }
    };
};
exports.getApply = getApply;
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicative(A, S) {
    var ap = exports.getApply(A, S).ap;
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: ap,
        of: exports.of
    };
}
exports.getApplicative = getApplicative;
/**
 * @category instances
 * @since 2.10.0
 */
function getChain(S) {
    var A = exports.getApply(T.ApplicativePar, S);
    var chain = TT.chain(T.Monad, S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        chain: function (ma, f) { return function_1.pipe(ma, chain(f)); }
    };
}
exports.getChain = getChain;
/**
 * @category instances
 * @since 2.4.0
 */
function getMonad(S) {
    var A = getApplicative(T.ApplicativePar, S);
    var C = getChain(S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        of: exports.of,
        chain: C.chain,
        fromIO: exports.fromIO,
        fromTask: exports.fromTask
    };
}
exports.getMonad = getMonad;
/**
 * @category instances
 * @since 2.10.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromPredicate = 
/*#__PURE__*/
FromEither_1.fromPredicate(exports.FromEither);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: exports.fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromIOK = 
/*#__PURE__*/
FromIO_1.fromIOK(exports.FromIO);
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromTask = {
    URI: exports.URI,
    fromIO: exports.fromIO,
    fromTask: exports.fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromTaskK = 
/*#__PURE__*/
FromTask_1.fromTaskK(exports.FromTask);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */
exports.toTuple2 = 
/*#__PURE__*/
TT.toTuple2(T.Functor);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Functor`](#functor) instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */
exports.functorTaskThese = {
    URI: exports.URI,
    map: _map
};
/**
 * Use [`Bifunctor`](#bifunctor) instead.
 *
 * @category instances
 * @since 2.7.0
 * @deprecated
 */
exports.bifunctorTaskThese = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * Use [`toTuple2`](#totuple2) instead.
 *
 * @since 2.4.0
 * @deprecated
 */
var toTuple = function (e, a) {
    return exports.toTuple2(function () { return e; }, function () { return a; });
};
exports.toTuple = toTuple;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.4.0
 * @deprecated
 */
exports.taskThese = {
    URI: exports.URI,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.4.0
 * @deprecated
 */
var getSemigroup = function (SE, SA) {
    return Apply_1.getApplySemigroup(T.ApplySeq)(TH.getSemigroup(SE, SA));
};
exports.getSemigroup = getSemigroup;

}, function(modId) { var map = {"./Apply":1619349411471,"./FromEither":1619349411514,"./FromIO":1619349411515,"./FromTask":1619349411516,"./function":1619349411472,"./Functor":1619349411473,"./Task":1619349411547,"./These":1619349411567,"./TheseT":1619349411568}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411567, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.these = exports.toTuple = exports.toTuple2 = exports.fromOptionK = exports.fromOption = exports.FromEither = exports.Traversable = exports.Foldable = exports.Bifunctor = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.of = exports.sequence = exports.traverse = exports.reduceRight = exports.foldMap = exports.reduce = exports.map = exports.mapLeft = exports.bimap = exports.fromOptions = exports.getRightOnly = exports.getLeftOnly = exports.rightOrBoth = exports.leftOrBoth = exports.isBoth = exports.isRight = exports.isLeft = exports.getRight = exports.getLeft = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.getSemigroup = exports.getEq = exports.getShow = exports.swap = exports.fold = exports.match = exports.foldW = exports.matchW = exports.both = exports.right = exports.left = void 0;
var Eq_1 = require("./Eq");
var FromEither_1 = require("./FromEither");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Option_1 = require("./Option");
/**
 * @category constructors
 * @since 2.0.0
 */
function left(left) {
    return { _tag: 'Left', left: left };
}
exports.left = left;
/**
 * @category constructors
 * @since 2.0.0
 */
function right(right) {
    return { _tag: 'Right', right: right };
}
exports.right = right;
/**
 * @category constructors
 * @since 2.0.0
 */
function both(left, right) {
    return { _tag: 'Both', left: left, right: right };
}
exports.both = both;
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onLeft, onRight, onBoth) { return function (fa) {
    switch (fa._tag) {
        case 'Left':
            return onLeft(fa.left);
        case 'Right':
            return onRight(fa.right);
        case 'Both':
            return onBoth(fa.left, fa.right);
    }
}; };
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchW;
/**
 * @category destructors
 * @since 2.10.0
 */
exports.match = exports.matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.match;
/**
 * @category combinators
 * @since 2.4.0
 */
exports.swap = exports.match(right, left, function (e, a) { return both(a, e); });
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(SE, SA) {
    return {
        show: exports.match(function (l) { return "left(" + SE.show(l) + ")"; }, function (a) { return "right(" + SA.show(a) + ")"; }, function (l, a) { return "both(" + SE.show(l) + ", " + SA.show(a) + ")"; })
    };
}
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.0.0
 */
function getEq(EE, EA) {
    return Eq_1.fromEquals(function (x, y) {
        return isLeft(x)
            ? isLeft(y) && EE.equals(x.left, y.left)
            : isRight(x)
                ? isRight(y) && EA.equals(x.right, y.right)
                : isBoth(y) && EE.equals(x.left, y.left) && EA.equals(x.right, y.right);
    });
}
exports.getEq = getEq;
/**
 * @category instances
 * @since 2.0.0
 */
function getSemigroup(SE, SA) {
    return {
        concat: function (x, y) {
            return isLeft(x)
                ? isLeft(y)
                    ? left(SE.concat(x.left, y.left))
                    : isRight(y)
                        ? both(x.left, y.right)
                        : both(SE.concat(x.left, y.left), y.right)
                : isRight(x)
                    ? isLeft(y)
                        ? both(y.left, x.right)
                        : isRight(y)
                            ? right(SA.concat(x.right, y.right))
                            : both(y.left, SA.concat(x.right, y.right))
                    : isLeft(y)
                        ? both(SE.concat(x.left, y.left), x.right)
                        : isRight(y)
                            ? both(x.left, SA.concat(x.right, y.right))
                            : both(SE.concat(x.left, y.left), SA.concat(x.right, y.right));
        }
    };
}
exports.getSemigroup = getSemigroup;
/**
 * @category instances
 * @since 2.10.0
 */
var getApply = function (S) { return ({
    URI: exports.URI,
    _E: undefined,
    map: _map,
    ap: function (fab, fa) {
        return isLeft(fab)
            ? isLeft(fa)
                ? left(S.concat(fab.left, fa.left))
                : isRight(fa)
                    ? left(fab.left)
                    : left(S.concat(fab.left, fa.left))
            : isRight(fab)
                ? isLeft(fa)
                    ? left(fa.left)
                    : isRight(fa)
                        ? right(fab.right(fa.right))
                        : both(fa.left, fab.right(fa.right))
                : isLeft(fa)
                    ? left(S.concat(fab.left, fa.left))
                    : isRight(fa)
                        ? both(fab.left, fab.right(fa.right))
                        : both(S.concat(fab.left, fa.left), fab.right(fa.right));
    }
}); };
exports.getApply = getApply;
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicative(S) {
    var A = exports.getApply(S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        of: exports.of
    };
}
exports.getApplicative = getApplicative;
/**
 * @category instances
 * @since 2.10.0
 */
function getChain(S) {
    var A = exports.getApply(S);
    var chain = function (ma, f) {
        if (isLeft(ma)) {
            return ma;
        }
        if (isRight(ma)) {
            return f(ma.right);
        }
        var fb = f(ma.right);
        return isLeft(fb)
            ? left(S.concat(ma.left, fb.left))
            : isRight(fb)
                ? both(ma.left, fb.right)
                : both(S.concat(ma.left, fb.left), fb.right);
    };
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        chain: chain
    };
}
exports.getChain = getChain;
/**
 * @category instances
 * @since 2.0.0
 */
function getMonad(S) {
    var C = getChain(S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        of: exports.of,
        ap: C.ap,
        chain: C.chain,
        throwError: left
    };
}
exports.getMonad = getMonad;
/**
 * Returns an `E` value if possible
 *
 * @example
 * import { getLeft, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(both('a', 1)), some('a'))
 *
 * @category destructors
 * @since 2.0.0
 */
function getLeft(fa) {
    return isLeft(fa) ? Option_1.some(fa.left) : isRight(fa) ? Option_1.none : Option_1.some(fa.left);
}
exports.getLeft = getLeft;
/**
 * Returns an `A` value if possible
 *
 * @example
 * import { getRight, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getRight(left('a')), none)
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(both('a', 1)), some(1))
 *
 * @category destructors
 * @since 2.0.0
 */
function getRight(fa) {
    return isLeft(fa) ? Option_1.none : isRight(fa) ? Option_1.some(fa.right) : Option_1.some(fa.right);
}
exports.getRight = getRight;
/**
 * Returns `true` if the these is an instance of `Left`, `false` otherwise
 *
 * @category guards
 * @since 2.0.0
 */
function isLeft(fa) {
    return fa._tag === 'Left';
}
exports.isLeft = isLeft;
/**
 * Returns `true` if the these is an instance of `Right`, `false` otherwise
 *
 * @category guards
 * @since 2.0.0
 */
function isRight(fa) {
    return fa._tag === 'Right';
}
exports.isRight = isRight;
/**
 * Returns `true` if the these is an instance of `Both`, `false` otherwise
 *
 * @category guards
 * @since 2.0.0
 */
function isBoth(fa) {
    return fa._tag === 'Both';
}
exports.isBoth = isBoth;
// TODO: make lazy in v3
/**
 * @example
 * import { leftOrBoth, left, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(leftOrBoth('a')(none), left('a'))
 * assert.deepStrictEqual(leftOrBoth('a')(some(1)), both('a', 1))
 *
 * @category constructors
 * @since 2.0.0
 */
function leftOrBoth(e) {
    return function (ma) { return (Option_1.isNone(ma) ? left(e) : both(e, ma.value)); };
}
exports.leftOrBoth = leftOrBoth;
// TODO: make lazy in v3
/**
 * @example
 * import { rightOrBoth, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(rightOrBoth(1)(none), right(1))
 * assert.deepStrictEqual(rightOrBoth(1)(some('a')), both('a', 1))
 *
 * @category constructors
 * @since 2.0.0
 */
function rightOrBoth(a) {
    return function (me) { return (Option_1.isNone(me) ? right(a) : both(me.value, a)); };
}
exports.rightOrBoth = rightOrBoth;
/**
 * Returns the `E` value if and only if the value is constructed with `Left`
 *
 * @example
 * import { getLeftOnly, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getLeftOnly(left('a')), some('a'))
 * assert.deepStrictEqual(getLeftOnly(right(1)), none)
 * assert.deepStrictEqual(getLeftOnly(both('a', 1)), none)
 *
 * @category destructors
 * @since 2.0.0
 */
function getLeftOnly(fa) {
    return isLeft(fa) ? Option_1.some(fa.left) : Option_1.none;
}
exports.getLeftOnly = getLeftOnly;
/**
 * Returns the `A` value if and only if the value is constructed with `Right`
 *
 * @example
 * import { getRightOnly, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(getRightOnly(left('a')), none)
 * assert.deepStrictEqual(getRightOnly(right(1)), some(1))
 * assert.deepStrictEqual(getRightOnly(both('a', 1)), none)
 *
 * @category destructors
 * @since 2.0.0
 */
function getRightOnly(fa) {
    return isRight(fa) ? Option_1.some(fa.right) : Option_1.none;
}
exports.getRightOnly = getRightOnly;
/**
 * Takes a pair of `Option`s and attempts to create a `These` from them
 *
 * @example
 * import { fromOptions, left, right, both } from 'fp-ts/These'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromOptions(none, none), none)
 * assert.deepStrictEqual(fromOptions(some('a'), none), some(left('a')))
 * assert.deepStrictEqual(fromOptions(none, some(1)), some(right(1)))
 * assert.deepStrictEqual(fromOptions(some('a'), some(1)), some(both('a', 1)))
 *
 * @category constructors
 * @since 2.0.0
 */
function fromOptions(fe, fa) {
    return Option_1.isNone(fe)
        ? Option_1.isNone(fa)
            ? Option_1.none
            : Option_1.some(right(fa.value))
        : Option_1.isNone(fa)
            ? Option_1.some(left(fe.value))
            : Option_1.some(both(fe.value, fa.value));
}
exports.fromOptions = fromOptions;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var bimap = function (f, g) { return function (fa) {
    return isLeft(fa) ? left(f(fa.left)) : isRight(fa) ? right(g(fa.right)) : both(f(fa.left), g(fa.right));
}; };
exports.bimap = bimap;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var mapLeft = function (f) { return function (fa) {
    return isLeft(fa) ? left(f(fa.left)) : isBoth(fa) ? both(f(fa.left), fa.right) : fa;
}; };
exports.mapLeft = mapLeft;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) {
    return isLeft(fa) ? fa : isRight(fa) ? right(f(fa.right)) : both(fa.left, f(fa.right));
}; };
exports.map = map;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    return isLeft(fa) ? b : isRight(fa) ? f(b, fa.right) : f(b, fa.right);
}; };
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) { return function (fa) {
    return isLeft(fa) ? M.empty : isRight(fa) ? f(fa.right) : f(fa.right);
}; }; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return isLeft(fa) ? b : isRight(fa) ? f(fa.right, b) : f(fa.right, b);
}; };
exports.reduceRight = reduceRight;
/**
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) {
    return isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(f(ta.right), right) : F.map(f(ta.right), function (b) { return both(ta.left, b); });
}; }; };
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(ta.right, right) : F.map(ta.right, function (b) { return both(ta.left, b); });
}; };
exports.sequence = sequence;
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = right;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'These';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromEither = {
    URI: exports.URI,
    fromEither: function_1.identity
};
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromOption = 
/*#__PURE__*/
FromEither_1.fromOption(exports.FromEither);
/**
 * @category combinators
 * @since 2.10.0
 */
exports.fromOptionK = 
/*#__PURE__*/
FromEither_1.fromOptionK(exports.FromEither);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @example
 * import { toTuple2, left, right, both } from 'fp-ts/These'
 *
 * assert.deepStrictEqual(toTuple2(() => 'a', () => 1)(left('b')), ['b', 1])
 * assert.deepStrictEqual(toTuple2(() => 'a', () => 1)(right(2)), ['a', 2])
 * assert.deepStrictEqual(toTuple2(() => 'a', () => 1)(both('b', 2)), ['b', 2])
 *
 * @since 2.10.0
 */
var toTuple2 = function (e, a) { return function (fa) {
    return isLeft(fa) ? [fa.left, a()] : isRight(fa) ? [e(), fa.right] : [fa.left, fa.right];
}; };
exports.toTuple2 = toTuple2;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`toTuple2`](#totuple2) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
var toTuple = function (e, a) {
    return exports.toTuple2(function () { return e; }, function () { return a; });
};
exports.toTuple = toTuple;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.these = {
    URI: exports.URI,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};

}, function(modId) { var map = {"./Eq":1619349411481,"./FromEither":1619349411514,"./function":1619349411472,"./Functor":1619349411473,"./Option":1619349411478}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411568, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheseM = exports.toTuple2 = exports.swap = exports.matchE = exports.match = exports.mapLeft = exports.bimap = exports.chain = exports.ap = exports.map = exports.leftF = exports.rightF = exports.both = exports.left = exports.right = void 0;
/**
 * @since 2.4.0
 */
var Apply_1 = require("./Apply");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var T = __importStar(require("./These"));
function right(F) {
    return function_1.flow(T.right, F.of);
}
exports.right = right;
function left(F) {
    return function_1.flow(T.left, F.of);
}
exports.left = left;
function both(F) {
    return function_1.flow(T.both, F.of);
}
exports.both = both;
function rightF(F) {
    return function (fa) { return F.map(fa, T.right); };
}
exports.rightF = rightF;
function leftF(F) {
    return function (fe) { return F.map(fe, T.left); };
}
exports.leftF = leftF;
function map(F) {
    return Functor_1.map(F, T.Functor);
}
exports.map = map;
function ap(F, S) {
    return Apply_1.ap(F, T.getApply(S));
}
exports.ap = ap;
function chain(M, S) {
    var _left = left(M);
    return function (f) { return function (ma) {
        return M.chain(ma, T.match(_left, f, function (e1, a) {
            return M.map(f(a), T.match(function (e2) { return T.left(S.concat(e1, e2)); }, function (b) { return T.both(e1, b); }, function (e2, b) { return T.both(S.concat(e1, e2), b); }));
        }));
    }; };
}
exports.chain = chain;
function bimap(F) {
    return function (f, g) { return function (fea) { return F.map(fea, T.bimap(f, g)); }; };
}
exports.bimap = bimap;
function mapLeft(F) {
    return function (f) { return function (fea) { return F.map(fea, T.mapLeft(f)); }; };
}
exports.mapLeft = mapLeft;
function match(F) {
    return function (onLeft, onRight, onBoth) { return function (ma) { return F.map(ma, T.match(onLeft, onRight, onBoth)); }; };
}
exports.match = match;
function matchE(M) {
    return function (onLeft, onRight, onBoth) { return function (ma) { return M.chain(ma, T.match(onLeft, onRight, onBoth)); }; };
}
exports.matchE = matchE;
function swap(F) {
    return function (ma) { return F.map(ma, T.swap); };
}
exports.swap = swap;
function toTuple2(F) {
    return function (e, a) { return function (fa) { return F.map(fa, T.toTuple2(e, a)); }; };
}
exports.toTuple2 = toTuple2;
/** @deprecated */
/* istanbul ignore next */
function getTheseM(M) {
    var _map = map(M);
    var _bimap = bimap(M);
    var _mapLeft = mapLeft(M);
    var _fold = matchE(M);
    var _toTuple2 = toTuple2(M);
    var of = right(M);
    var mapT = function (fa, f) { return function_1.pipe(fa, _map(f)); };
    return {
        map: mapT,
        bimap: function (fea, f, g) { return function_1.pipe(fea, _bimap(f, g)); },
        mapLeft: function (fea, f) { return function_1.pipe(fea, _mapLeft(f)); },
        fold: function (fa, onLeft, onRight, onBoth) { return function_1.pipe(fa, _fold(onLeft, onRight, onBoth)); },
        swap: swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: left(M),
        right: right(M),
        both: both(M),
        toTuple: function (fa, e, a) {
            return function_1.pipe(fa, _toTuple2(function () { return e; }, function () { return a; }));
        },
        getMonad: function (S) {
            var _ap = ap(M, S);
            var _chain = chain(M, S);
            return {
                _E: undefined,
                map: mapT,
                of: of,
                ap: function (fab, fa) { return function_1.pipe(fab, _ap(fa)); },
                chain: function (ma, f) { return function_1.pipe(ma, _chain(f)); }
            };
        }
    };
}
exports.getTheseM = getTheseM;

}, function(modId) { var map = {"./Apply":1619349411471,"./function":1619349411472,"./Functor":1619349411473,"./These":1619349411567}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411569, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.traced = exports.flap = exports.Functor = exports.URI = exports.map = exports.getComonad = exports.censor = exports.listens = exports.listen = exports.tracks = void 0;
var Functor_1 = require("./Functor");
var function_1 = require("./function");
// TODO: curry in v3
/**
 * Extracts a value at a relative position which depends on the current value.
 *
 * @since 2.0.0
 */
function tracks(M, f) {
    return function (wa) { return wa(f(wa(M.empty))); };
}
exports.tracks = tracks;
/**
 * Get the current position
 *
 * @since 2.0.0
 */
function listen(wa) {
    return function (e) { return [wa(e), e]; };
}
exports.listen = listen;
/**
 * Get a value which depends on the current position
 *
 * @since 2.0.0
 */
function listens(f) {
    return function (wa) { return function (e) { return [wa(e), f(e)]; }; };
}
exports.listens = listens;
/**
 * Apply a function to the current position
 *
 * @since 2.0.0
 */
function censor(f) {
    return function (wa) { return function (e) { return wa(f(e)); }; };
}
exports.censor = censor;
/**
 * @category instances
 * @since 2.0.0
 */
function getComonad(monoid) {
    function extend(wa, f) {
        return function (p1) { return f(function (p2) { return wa(monoid.concat(p1, p2)); }); };
    }
    function extract(wa) {
        return wa(monoid.empty);
    }
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        extend: extend,
        extract: extract
    };
}
exports.getComonad = getComonad;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return function (p) { return f(fa(p)); }; }; };
exports.map = map;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Traced';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Functor`](#functor) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.traced = exports.Functor;

}, function(modId) { var map = {"./Functor":1619349411473,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411570, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTraversableComposition = exports.sequence = exports.traverse = void 0;
var Foldable_1 = require("./Foldable");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
function traverse(T, G) {
    return function (F) {
        var traverseT = T.traverse(F);
        var traverseG = G.traverse(F);
        return function (f) { return function (fga) { return traverseT(fga, function (ga) { return traverseG(ga, f); }); }; };
    };
}
exports.traverse = traverse;
function sequence(T, G) {
    return function (F) {
        var sequenceT = T.sequence(F);
        var sequenceG = G.sequence(F);
        return function (fgha) { return sequenceT(T.map(fgha, sequenceG)); };
    };
}
exports.sequence = sequence;
/** @deprecated */
function getTraversableComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    var FC = Foldable_1.getFoldableComposition(F, G);
    var _traverse = traverse(F, G);
    var _sequence = sequence(F, G);
    return {
        map: map,
        reduce: FC.reduce,
        foldMap: FC.foldMap,
        reduceRight: FC.reduceRight,
        traverse: function (H) {
            var traverseH = _traverse(H);
            return function (fga, f) { return function_1.pipe(fga, traverseH(f)); };
        },
        sequence: function (H) {
            var sequenceH = _sequence(H);
            return function (fgha) { return function_1.pipe(fgha, sequenceH); };
        }
    };
}
exports.getTraversableComposition = getTraversableComposition;

}, function(modId) { var map = {"./Foldable":1619349411512,"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411571, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411572, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tree = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Traversable = exports.Foldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.of = exports.sequence = exports.traverse = exports.extract = exports.reduceRight = exports.foldMap = exports.reduce = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.fold = exports.elem = exports.unfoldForestM = exports.unfoldTreeM = exports.unfoldForest = exports.unfoldTree = exports.drawTree = exports.drawForest = exports.getEq = exports.getShow = exports.make = void 0;
var Apply_1 = require("./Apply");
var A = __importStar(require("./Array"));
var Eq_1 = require("./Eq");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var Chain_1 = require("./Chain");
/**
 * @category constructors
 * @since 2.0.0
 */
function make(value, forest) {
    if (forest === void 0) { forest = []; }
    return {
        value: value,
        forest: forest
    };
}
exports.make = make;
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(S) {
    var show = function (t) {
        return A.isEmpty(t.forest)
            ? "make(" + S.show(t.value) + ")"
            : "make(" + S.show(t.value) + ", [" + t.forest.map(show).join(', ') + "])";
    };
    return {
        show: show
    };
}
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.0.0
 */
function getEq(E) {
    var SA;
    var R = Eq_1.fromEquals(function (x, y) { return E.equals(x.value, y.value) && SA.equals(x.forest, y.forest); });
    SA = A.getEq(R);
    return R;
}
exports.getEq = getEq;
var draw = function (indentation, forest) {
    var r = '';
    var len = forest.length;
    var tree;
    for (var i = 0; i < len; i++) {
        tree = forest[i];
        var isLast = i === len - 1;
        r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value;
        r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest);
    }
    return r;
};
/**
 * Neat 2-dimensional drawing of a forest
 *
 * @since 2.0.0
 */
function drawForest(forest) {
    return draw('\n', forest);
}
exports.drawForest = drawForest;
/**
 * Neat 2-dimensional drawing of a tree
 *
 * @example
 * import { make, drawTree } from 'fp-ts/Tree'
 *
 * const fa = make('a', [
 *   make('b'),
 *   make('c'),
 *   make('d', [make('e'), make('f')])
 * ])
 *
 * assert.strictEqual(drawTree(fa), `a
 * ├─ b
 * ├─ c
 * └─ d
 *    ├─ e
 *    └─ f`)
 *
 *
 * @since 2.0.0
 */
function drawTree(tree) {
    return tree.value + drawForest(tree.forest);
}
exports.drawTree = drawTree;
/**
 * Build a (possibly infinite) tree from a seed value in breadth-first order.
 *
 * @category constructors
 * @since 2.0.0
 */
function unfoldTree(b, f) {
    var _a = f(b), a = _a[0], bs = _a[1];
    return { value: a, forest: unfoldForest(bs, f) };
}
exports.unfoldTree = unfoldTree;
/**
 * Build a (possibly infinite) forest from a list of seed values in breadth-first order.
 *
 * @category constructors
 * @since 2.0.0
 */
function unfoldForest(bs, f) {
    return bs.map(function (b) { return unfoldTree(b, f); });
}
exports.unfoldForest = unfoldForest;
function unfoldTreeM(M) {
    var unfoldForestMM = unfoldForestM(M);
    return function (b, f) { return M.chain(f(b), function (_a) {
        var a = _a[0], bs = _a[1];
        return M.map(unfoldForestMM(bs, f), function (ts) { return ({ value: a, forest: ts }); });
    }); };
}
exports.unfoldTreeM = unfoldTreeM;
function unfoldForestM(M) {
    var traverseM = A.traverse(M);
    return function (bs, f) {
        return function_1.pipe(bs, traverseM(function (b) { return unfoldTreeM(M)(b, f); }));
    };
}
exports.unfoldForestM = unfoldForestM;
// TODO: curry in v3
/**
 * @since 2.0.0
 */
function elem(E) {
    var go = function (a, fa) {
        if (E.equals(a, fa.value)) {
            return true;
        }
        return fa.forest.some(function (tree) { return go(a, tree); });
    };
    return go;
}
exports.elem = elem;
/**
 * Fold a tree into a "summary" value in depth-first order.
 *
 * For each node in the tree, apply `f` to the `value` and the result of applying `f` to each `forest`.
 *
 * This is also known as the catamorphism on trees.
 *
 * @example
 * import { fold, make } from 'fp-ts/Tree'
 * import { concatAll } from 'fp-ts/Monoid'
 * import { MonoidSum } from 'fp-ts/number'
 *
 * const t = make(1, [make(2), make(3)])
 *
 * const sum = concatAll(MonoidSum)
 *
 * // Sum the values in a tree:
 * assert.deepStrictEqual(fold((a: number, bs: Array<number>) => a + sum(bs))(t), 6)
 *
 * // Find the maximum value in the tree:
 * assert.deepStrictEqual(fold((a: number, bs: Array<number>) => bs.reduce((b, acc) => Math.max(b, acc), a))(t), 3)
 *
 * // Count the number of leaves in the tree:
 * assert.deepStrictEqual(fold((_: number, bs: Array<number>) => (bs.length === 0 ? 1 : sum(bs)))(t), 2)
 *
 * @category destructors
 * @since 2.6.0
 */
function fold(f) {
    var go = function (tree) { return f(tree.value, tree.forest.map(go)); };
    return go;
}
exports.fold = fold;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _ap = function (fab, fa) {
    return function_1.pipe(fab, exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }));
};
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return _ap(fab, fa); }; };
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) {
    var _a = f(ma.value), value = _a.value, forest = _a.forest;
    var concat = A.getMonoid().concat;
    return {
        value: value,
        forest: concat(forest, ma.forest.map(exports.chain(f)))
    };
}; };
exports.chain = chain;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) { return ({
    value: f(wa),
    forest: wa.forest.map(exports.extend(f))
}); }; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return ({
    value: f(fa.value),
    forest: fa.forest.map(exports.map(f))
}); }; };
exports.map = map;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    var r = f(b, fa.value);
    var len = fa.forest.length;
    for (var i = 0; i < len; i++) {
        r = function_1.pipe(fa.forest[i], exports.reduce(r, f));
    }
    return r;
}; };
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) {
    return exports.reduce(M.empty, function (acc, a) { return M.concat(acc, f(a)); });
}; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    var r = b;
    var len = fa.forest.length;
    for (var i = len - 1; i >= 0; i--) {
        r = function_1.pipe(fa.forest[i], exports.reduceRight(r, f));
    }
    return f(fa.value, r);
}; };
exports.reduceRight = reduceRight;
/**
 * @category Extract
 * @since 2.6.2
 */
var extract = function (wa) { return wa.value; };
exports.extract = extract;
/**
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseF = A.traverse(F);
    var out = function (f) { return function (ta) {
        return F.ap(F.map(f(ta.value), function (value) { return function (forest) { return ({
            value: value,
            forest: forest
        }); }; }), function_1.pipe(ta.forest, traverseF(out(f))));
    }; };
    return out;
};
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return exports.traverse(F)(function_1.identity); };
exports.sequence = sequence;
/**
 * @category Pointed
 * @since 2.7.0
 */
var of = function (a) { return make(a); };
exports.of = of;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Tree';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.tree = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    extract: exports.extract,
    extend: _extend
};

}, function(modId) { var map = {"./Apply":1619349411471,"./Array":1619349411474,"./Eq":1619349411481,"./function":1619349411472,"./Functor":1619349411473,"./Chain":1619349411475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411573, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = exports.mapLeft = exports.map = exports.Traversable = exports.Foldable = exports.Comonad = exports.Semigroupoid = exports.Bifunctor = exports.flap = exports.Functor = exports.URI = exports.sequence = exports.traverse = exports.reduceRight = exports.reduce = exports.foldMap = exports.extract = exports.duplicate = exports.extend = exports.compose = exports.mapSnd = exports.mapFst = exports.bimap = exports.getChainRec = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.swap = exports.snd = exports.fst = void 0;
var RT = __importStar(require("./ReadonlyTuple"));
var Functor_1 = require("./Functor");
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
/**
 * @category destructors
 * @since 2.0.0
 */
exports.fst = RT.fst;
/**
 * @category destructors
 * @since 2.0.0
 */
exports.snd = RT.snd;
/**
 * @category combinators
 * @since 2.0.0
 */
var swap = function (ea) { return [exports.snd(ea), exports.fst(ea)]; };
exports.swap = swap;
/**
 * @category instances
 * @since 2.0.0
 */
function getApply(S) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) { return [exports.fst(fab)(exports.fst(fa)), S.concat(exports.snd(fab), exports.snd(fa))]; }
    };
}
exports.getApply = getApply;
var of = function (M) { return function (a) {
    return [a, M.empty];
}; };
/**
 * @category instances
 * @since 2.0.0
 */
function getApplicative(M) {
    var A = getApply(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        of: of(M)
    };
}
exports.getApplicative = getApplicative;
/**
 * @category instances
 * @since 2.0.0
 */
function getChain(S) {
    var A = getApply(S);
    return {
        URI: exports.URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        chain: function (ma, f) {
            var _a = f(exports.fst(ma)), b = _a[0], s = _a[1];
            return [b, S.concat(exports.snd(ma), s)];
        }
    };
}
exports.getChain = getChain;
/**
 * @category instances
 * @since 2.0.0
 */
function getMonad(M) {
    var C = getChain(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
exports.getMonad = getMonad;
/**
 * @category instances
 * @since 2.0.0
 */
function getChainRec(M) {
    var chainRec = function (a, f) {
        var result = f(a);
        var acc = M.empty;
        var s = exports.fst(result);
        while (s._tag === 'Left') {
            acc = M.concat(acc, exports.snd(result));
            result = f(s.left);
            s = exports.fst(result);
        }
        return [s.right, M.concat(acc, exports.snd(result))];
    };
    var C = getChain(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        chainRec: chainRec
    };
}
exports.getChainRec = getChainRec;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _compose = function (bc, ab) { return function_1.pipe(bc, exports.compose(ab)); };
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.mapFst(f)); };
/* istanbul ignore next */
var _bimap = function (fa, f, g) { return function_1.pipe(fa, exports.bimap(f, g)); };
/* istanbul ignore next */
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapSnd(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
function _traverse(F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
}
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var bimap = function (f, g) { return function (fa) { return [g(exports.fst(fa)), f(exports.snd(fa))]; }; };
exports.bimap = bimap;
/**
 * Map a function over the first component of a `Tuple`.
 *
 * This is the `map` operation of the `Functor` instance.
 *
 * @category Functor
 * @since 2.0.0
 */
var mapFst = function (f) { return function (fa) { return [f(exports.fst(fa)), exports.snd(fa)]; }; };
exports.mapFst = mapFst;
/**
 * Map a function over the second component of a `Tuple`.
 *
 * This is the `mapLeft` operation of the `Bifunctor` instance.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var mapSnd = function (f) { return function (fa) { return [exports.fst(fa), f(exports.snd(fa))]; }; };
exports.mapSnd = mapSnd;
/**
 * @category Semigroupoid
 * @since 2.0.0
 */
var compose = function (ab) { return function (bc) { return [exports.fst(bc), exports.snd(ab)]; }; };
exports.compose = compose;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) { return [f(wa), exports.snd(wa)]; }; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category Extract
 * @since 2.6.2
 */
exports.extract = RT.extract;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.foldMap = RT.foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduce = RT.reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduceRight = RT.reduceRight;
/**
 * @since 2.6.3
 */
var traverse = function (F) {
    return function (f) { return function (ta) { return F.map(f(exports.fst(ta)), function (b) { return [b, exports.snd(ta)]; }); }; };
};
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return function (fas) {
    return F.map(exports.fst(fas), function (a) { return [a, exports.snd(fas)]; });
}; };
exports.sequence = sequence;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Tuple';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Semigroupoid = {
    URI: exports.URI,
    compose: _compose
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`mapFst`](#mapfst) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.map = exports.mapFst;
/**
 * Use [`mapSnd`](#mapsnd) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.mapLeft = exports.mapSnd;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.tuple = {
    URI: exports.URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract: exports.extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};

}, function(modId) { var map = {"./ReadonlyTuple":1619349411552,"./Functor":1619349411473,"./function":1619349411472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411574, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411575, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationM = void 0;
/**
 * @since 2.0.0
 */
var Applicative_1 = require("./Applicative");
var E = __importStar(require("./Either"));
/** @deprecated */
function getValidationM(S, M) {
    var A = Applicative_1.getApplicativeComposition(M, E.getApplicativeValidation(S));
    return {
        map: A.map,
        ap: A.ap,
        of: A.of,
        chain: function (ma, f) { return M.chain(ma, function (e) { return (E.isLeft(e) ? M.of(E.left(e.left)) : f(e.right)); }); },
        alt: function (me, that) {
            return M.chain(me, function (e1) {
                return E.isRight(e1) ? M.of(e1) : M.map(that(), function (e2) { return (E.isLeft(e2) ? E.left(S.concat(e1.left, e2.left)) : e2); });
            });
        }
    };
}
exports.getValidationM = getValidationM;

}, function(modId) { var map = {"./Applicative":1619349411470,"./Either":1619349411507}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411576, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411577, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.writer = exports.execWriter = exports.evalWriter = exports.execute = exports.evaluate = exports.flap = exports.Functor = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.getPointed = exports.URI = exports.map = exports.censor = exports.listens = exports.pass = exports.listen = exports.tell = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Appends a value to the accumulator
 *
 * @category combinators
 * @since 2.0.0
 */
var tell = function (w) { return function () { return [undefined, w]; }; };
exports.tell = tell;
/**
 * Modifies the result to include the changes to the accumulator
 *
 * @category combinators
 * @since 2.0.0
 */
var listen = function (fa) { return function () {
    var _a = fa(), a = _a[0], w = _a[1];
    return [[a, w], w];
}; };
exports.listen = listen;
/**
 * Applies the returned function to the accumulator
 *
 * @category combinators
 * @since 2.0.0
 */
var pass = function (fa) { return function () {
    var _a = fa(), _b = _a[0], a = _b[0], f = _b[1], w = _a[1];
    return [a, f(w)];
}; };
exports.pass = pass;
/**
 * Projects a value from modifications made to the accumulator during an action
 *
 * @category combinators
 * @since 2.0.0
 */
var listens = function (f) { return function (fa) { return function () {
    var _a = fa(), a = _a[0], w = _a[1];
    return [[a, f(w)], w];
}; }; };
exports.listens = listens;
/**
 * Modify the final accumulator value by applying a function
 *
 * @category combinators
 * @since 2.0.0
 */
var censor = function (f) { return function (fa) { return function () {
    var _a = fa(), a = _a[0], w = _a[1];
    return [a, f(w)];
}; }; };
exports.censor = censor;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return function () {
    var _a = fa(), a = _a[0], w = _a[1];
    return [f(a), w];
}; }; };
exports.map = map;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Writer';
/**
 * @category instances
 * @since 2.10.0
 */
var getPointed = function (M) { return ({
    URI: exports.URI,
    _E: undefined,
    of: function (a) { return function () { return [a, M.empty]; }; }
}); };
exports.getPointed = getPointed;
/**
 * @category instances
 * @since 2.10.0
 */
var getApply = function (S) { return ({
    URI: exports.URI,
    _E: undefined,
    map: _map,
    ap: function (fab, fa) { return function () {
        var _a = fab(), f = _a[0], w1 = _a[1];
        var _b = fa(), a = _b[0], w2 = _b[1];
        return [f(a), S.concat(w1, w2)];
    }; }
}); };
exports.getApply = getApply;
/**
 * @category instances
 * @since 2.10.0
 */
var getApplicative = function (M) {
    var A = exports.getApply(M);
    var P = exports.getPointed(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        of: P.of
    };
};
exports.getApplicative = getApplicative;
/**
 * @category instances
 * @since 2.10.0
 */
function getChain(M) {
    var A = exports.getApply(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        chain: function (fa, f) { return function () {
            var _a = fa(), a = _a[0], w1 = _a[1];
            var _b = f(a)(), b = _b[0], w2 = _b[1];
            return [b, M.concat(w1, w2)];
        }; }
    };
}
exports.getChain = getChain;
/**
 * @category instances
 * @since 2.0.0
 */
function getMonad(M) {
    var A = exports.getApplicative(M);
    var C = getChain(M);
    return {
        URI: exports.URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        of: A.of,
        chain: C.chain
    };
}
exports.getMonad = getMonad;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var evaluate = function (fa) { return fa()[0]; };
exports.evaluate = evaluate;
/**
 * @since 2.8.0
 */
var execute = function (fa) { return fa()[1]; };
exports.execute = execute;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @since 2.0.0
 * @deprecated
 */
var evalWriter = function (fa) { return fa()[0]; };
exports.evalWriter = evalWriter;
/**
 * Use [`execute`](#execute) instead
 *
 * @since 2.0.0
 * @deprecated
 */
var execWriter = function (fa) { return fa()[1]; };
exports.execWriter = execWriter;
/**
 * Use [`Functor`](#functor) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.writer = exports.Functor;

}, function(modId) { var map = {"./function":1619349411472,"./Functor":1619349411473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1619349411578, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWriterM = void 0;
function getWriterM(M) {
    var map = function (fa, f) { return function () {
        return M.map(fa(), function (_a) {
            var a = _a[0], w = _a[1];
            return [f(a), w];
        });
    }; };
    return {
        map: map,
        evalWriter: function (fa) { return M.map(fa(), function (_a) {
            var a = _a[0];
            return a;
        }); },
        execWriter: function (fa) { return M.map(fa(), function (_a) {
            var _ = _a[0], w = _a[1];
            return w;
        }); },
        tell: function (w) { return function () { return M.of([undefined, w]); }; },
        listen: function (fa) { return function () { return M.map(fa(), function (_a) {
            var a = _a[0], w = _a[1];
            return [[a, w], w];
        }); }; },
        pass: function (fa) { return function () { return M.map(fa(), function (_a) {
            var _b = _a[0], a = _b[0], f = _b[1], w = _a[1];
            return [a, f(w)];
        }); }; },
        listens: function (fa, f) { return function () { return M.map(fa(), function (_a) {
            var a = _a[0], w = _a[1];
            return [[a, f(w)], w];
        }); }; },
        censor: function (fa, f) { return function () { return M.map(fa(), function (_a) {
            var a = _a[0], w = _a[1];
            return [a, f(w)];
        }); }; },
        getMonad: function (W) {
            return {
                _E: undefined,
                map: map,
                of: function (a) { return function () { return M.of([a, W.empty]); }; },
                ap: function (mab, ma) { return function () { return M.chain(mab(), function (_a) {
                    var f = _a[0], w1 = _a[1];
                    return M.map(ma(), function (_a) {
                        var a = _a[0], w2 = _a[1];
                        return [f(a), W.concat(w1, w2)];
                    });
                }); }; },
                chain: function (ma, f) { return function () { return M.chain(ma(), function (_a) {
                    var a = _a[0], w1 = _a[1];
                    return M.map(f(a)(), function (_a) {
                        var b = _a[0], w2 = _a[1];
                        return [b, W.concat(w1, w2)];
                    });
                }); }; }
            };
        }
    };
}
exports.getWriterM = getWriterM;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1619349411467);
})()
//# sourceMappingURL=index.js.map
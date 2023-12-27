import { v4 as uuidv4 } from 'uuid';

type RawTree = [string, number, number];

type Tree = {
  name: string;
  key: string;
  lat: number;
  lng: number;
};

const data: RawTree[] = [
  ['Maple, Freeman Autumn Blaze', 43.7516484696036, -79.6043351187792],
  ['Spruce, Norway', 43.6948909491284, -79.4425554596103],
  ['Basswood, Redmond', 43.7525109763781, -79.3152894492898],
  ['Honey locust Skyline', 43.756207384024, -79.5037324669931],
  ['Spruce', 43.7107465583102, -79.2368516391258],
  ['Maple, sugar', 43.718486315938, -79.5626546387927],
  ['Linden, littleleaf', 43.6784867916637, -79.5370681734007],
  ['Cedar', 43.7299823807888, -79.5958716742211],
  ['Maple, Norway', 43.6983877162485, -79.495354186626],
  ['Honey locust Skyline', 43.7626633153283, -79.3685878875961],
  ['Maple, Norway', 43.7573559683934, -79.4842080195391],
  ['Oak, bur', 43.7609064859588, -79.1904894466024],
  ['Planetree, London', 43.6414216574044, -79.5028823893341],
  ['Planetree, London', 43.7590308609652, -79.4509838941747],
  ['Maple, red', 43.7310430218282, -79.4558111577874],
  ['Pine, Austrian', 43.666446777415, -79.5366282195176],
  ['Mulberry, white', 43.7411641515819, -79.4263083707508],
  ['Pine, Austrian', 43.6770613270701, -79.5009740191326],
  ['Apple', 43.7564844411222, -79.4211742834531],
  ['Honey locust Skyline', 43.7103077902559, -79.2618194000913],
  ['Pear', 43.6714099856944, -79.4156792413481],
  ['Maple, Japanese', 43.7867582693769, -79.4416434396263],
  ['Maple, Norway', 43.6431385983441, -79.5024614359906],
  ['Maple, Norway columnar', 43.6924222500831, -79.5201375328926],
  ['Elm, Chinese', 43.6915362922561, -79.2798556717841],
  ['Lilac, Japanese', 43.7756108546188, -79.2920142736002],
  ['Maple, Japanese', 43.6916462758534, -79.4200776731018],
  ['Catalpa, northern', 43.7393475498783, -79.4420432441805],
  ['Pine, Austrian', 43.6878075260117, -79.4828928820827],
  ['Birch', 43.714725494539, -79.235744437063],
  ['Oak, swamp white', 43.8018342666693, -79.3732421298004],
  ['Maple, Freeman Autumn Blaze', 43.7302409658884, -79.258573344114],
  ['Maple, Norway', 43.6589532473658, -79.4447506596053],
  ['Spruce, Colorado blue', 43.6677193623575, -79.5193303205713],
  ['Apple, Sargents', 43.7116294206846, -79.4406910423771],
  ['Linden, littleleaf Glenleven', 43.8338651247139, -79.2283884419797],
  ['Honey locust', 43.6416065122218, -79.5817175795265],
  ['Ginkgo', 43.6921592693152, -79.4105299127615],
  ['Peach', 43.6942150182945, -79.4469962836757],
  ['Hackberry', 43.7334484970146, -79.4303210179846],
  ['Black locust', 43.6730011292103, -79.4420600809539],
  ['Maple, Norway Deborah', 43.8213192727632, -79.2251625937866],
  ['Honey locust Sunburst', 43.7911881497534, -79.1422106055596],
  ['Oak, English', 43.6653565457505, -79.3060926210642],
  ['Elm, American', 43.6996263170768, -79.2552079569223],
  ['Maple, sugar', 43.7546798360035, -79.312258584179],
  ['Maple, Norway Crimson King', 43.7661722044772, -79.4307241441834],
  ['Spruce, Colorado blue', 43.7273095143871, -79.5073293259503],
  ['Honey locust Shademaster', 43.6539336550253, -79.3412423510737],
  ['Oak, red', 43.8059362397114, -79.3580449111787],
  ['Oak, white', 43.7062056087387, -79.2349735828495],
  ['Hawthorn, green Winter King', 43.7542731442459, -79.2640533634742],
  ['Kentucky coffeetree', 43.7800610247277, -79.5007460571387],
  ['Spruce, Colorado blue', 43.5934250352152, -79.5244592797031],
  ['Linden, littleleaf', 43.6895378036595, -79.407978757373],
  ['Maple, tatarian', 43.7503839201506, -79.3590061650702],
  ['Elm, Accolade', 43.7605632976153, -79.2766077661939],
  ['Serviceberry', 43.6836764034286, -79.4499091503085],
  ['Maple, silver', 43.7514931993216, -79.2070482022341],
  ['Honey locust Skyline', 43.6176039447816, -79.4909693119909],
  ['Honey locust', 43.6504084061084, -79.4799571741051],
  ['Kentucky coffeetree', 43.6473201667206, -79.4077856070703],
  ['Cherry, choke', 43.7900333632944, -79.4330880154453],
  ['Maple, Norway', 43.7017297171669, -79.4195527336963],
  ['Apple, Sargents', 43.6514729513095, -79.5056066397646],
  ['Pine', 43.7682114291375, -79.4583891291239],
  ['Buckeye, yellow', 43.6489530036382, -79.4812895862387],
  ['Apple, Sargents', 43.6434096770226, -79.5346884280203],
  ['Maple, silver', 43.6713192335975, -79.5439126445124],
  ['Spruce, Colorado blue', 43.6602416902681, -79.550216822928],
  ['Kentucky coffeetree', 43.7016956458984, -79.2559310484687],
  ['Hawthorn', 43.6544344036901, -79.5267085273403],
  ['Buckeye, yellow', 43.7505178264711, -79.2237888887384],
  ['Oak, bur', 43.7593933844553, -79.4399145129122],
  ['Linden, littleleaf', 43.6909535894996, -79.2734501392627],
  ['Lilac, Japanese', 43.6806718493061, -79.4884355438819],
  ['Maple, Amur', 43.6569480286954, -79.4549324889838],
  ['Maple, silver', 43.7936361577476, -79.4151987289127],
  ['Apple, Sargents', 43.7635364099778, -79.2198074814358],
  ['Serviceberry', 43.775073989798, -79.1864000649882],
  ['Maple, Norway', 43.6898079210131, -79.5657727226526],
  ['Cucumbertree', 43.6973590374139, -79.3252731211978],
  ['Maple', 43.8080935421944, -79.3150333508377],
  ['Pear Chanticleer', 43.7472138461718, -79.5614544910908],
  ['Maple, Norway', 43.8107647072928, -79.2050400092641],
  ['Serviceberry', 43.7315802998064, -79.4665558643532],
  ['Birch', 43.6673346356161, -79.4143146677291],
  ['Pear Chanticleer', 43.657017584956, -79.5050966342656],
  ['Maple, silver', 43.6481578119962, -79.429365079538],
  ['Lilac, Japanese', 43.7309978259246, -79.4283334081581],
  ['Cedar, white', 43.7546317199046, -79.4154733040562],
  ['Maple, Norway', 43.7067996747292, -79.3658897134624],
  ['Oak, red', 43.6586027166358, -79.3085454035555],
  ['Maple, Freeman Autumn Blaze', 43.7865753980902, -79.3120234700091],
  ['Pear', 43.771863265129, -79.1763513914461],
  ['Maple, silver', 43.7798182439526, -79.2710927758162],
  ['Honey locust Skyline', 43.6737464509056, -79.315028044004],
  ['Honey locust Sunburst', 43.7509674195763, -79.3981889226486],
  ['Honey locust', 43.7123105219895, -79.575076287438],
  ['Maple, hedge', 43.6683714025809, -79.583529473337],
  ['Maple, Norway', 43.7820364935438, -79.4290305518831],
  ['Oak, red', 43.6784316576592, -79.5341829621119],
  ['Serviceberry', 43.6867810778213, -79.5510115060062],
  ['Pine, Austrian', 43.7163232387735, -79.4048888560693],
  ['Maple, Norway Schwedler', 43.7400774343793, -79.3009551726728],
  ['Kentucky coffeetree', 43.6835067437161, -79.3169101115045],
  ['Oak, red', 43.8215892320065, -79.2887042165161],
  ['Cherry, purple-leaf sand', 43.6777181647929, -79.4465130829901],
  ['Maple, Norway', 43.6437876617655, -79.5557233272362],
  ['Mulberry, white', 43.6667581567872, -79.3715990068869],
  ['Oak, red', 43.7517671085544, -79.2728082498542],
  ['Maple, black', 43.7611980953357, -79.2095785361357],
  ['Maple', 43.6373818679325, -79.4330372065506],
  ['Maple, red', 43.7204737029664, -79.3490743941598],
  ['Yellowwood, Kentucky', 43.6414292839707, -79.4229753222764],
  ['Honey locust', 43.7410095970519, -79.2714633308768],
  ['Elm, American Valley Forge', 43.7976201867673, -79.1358252437433],
  ['Oak, English', 43.6977365680868, -79.5213230710193],
  ['Basswood, Redmond', 43.7006392310588, -79.6024931420654],
  ['Maple, Norway', 43.6820192069029, -79.4872969443877],
  ['Maple, Freeman Autumn Blaze', 43.7108761693203, -79.3035462104454],
  ['Oak, chinquapin', 43.6702919394661, -79.4126697187274],
  ['Beech, American', 43.7078159645566, -79.340421483659],
  ['Pine, Austrian', 43.733568586972, -79.5040561008978],
  ['Spruce, white', 43.6915210482569, -79.3209769699282],
  ['Pine scots', 43.6988718227803, -79.2561311320323],
  ['Willow, black', 43.7880250820509, -79.1383705202664],
  ['Maple, sugar', 43.8159713986, -79.2223390521603],
  ['Honey locust', 43.7097853371771, -79.2537477571847],
  ['Maple, Norway', 43.7050939776945, -79.2987280190303],
  ['Maple, silver', 43.6811674259745, -79.3228139411989],
  ['Honey locust Shademaster', 43.779744109847, -79.2153759677727],
  ['Maple, Norway Schwedler', 43.7959617599377, -79.1805272318007],
  ['Linden, littleleaf Glenleven', 43.6933219437371, -79.3860441231019],
  ['Cherry, Japanese', 43.6488081808605, -79.4157980114052],
  ['Birch', 43.7380026914431, -79.5822142937521],
  ['Maple, Norway', 43.7932830979466, -79.3054649910161],
  ['Honey locust', 43.5900644331855, -79.53791863798],
  ['Maple, silver', 43.6630787656879, -79.3782503940093],
  ['Oak, pin', 43.7621977453237, -79.3947958187562],
  ['Mulberry, white', 43.6668074722175, -79.4945044749433],
  ['Kentucky coffeetree', 43.7859433301601, -79.239962518573],
  ['Yellowwood, Kentucky', 43.7393013371709, -79.4982685586232],
  ['Oak, red', 43.7975589405438, -79.3198464295561],
  ['Honey locust', 43.6826827333759, -79.5569489920809],
  ['Birch, white', 43.7073396210013, -79.4325530567611],
  ['Birch, river', 43.6613499050478, -79.4183212366267],
  ['Maple, Freeman Autumn Blaze', 43.672923186555, -79.3427537104997],
  ['Honey locust Shademaster', 43.7855634716395, -79.1514344522199],
  ['Maple, sugar', 43.7910018220075, -79.1760723219876],
  ['Maple, silver', 43.649291208925, -79.4553566399768],
  ['Maple, sugar', 43.6914872910542, -79.3671581992366],
  ['Elm, Siberian', 43.763030059961, -79.4124315121499],
  ['Zelkova', 43.7190993757327, -79.3343528877932],
  ['Elm, Siberian', 43.6182375985604, -79.5369031897736],
  ['Oak, pin', 43.5977481199484, -79.5171069730734],
  ['Ginkgo', 43.6776057083319, -79.4251903964642],
  ['Linden, littleleaf', 43.7408184416597, -79.2360861569353],
  ['Honey locust Skyline', 43.6485552949758, -79.4517279322145],
  ['Lilac, Japanese', 43.7306022694681, -79.402332305861],
  ['Ginkgo, columnar', 43.72962956839, -79.338733049251],
  ['Basswood, American', 43.7533291264452, -79.5817970736745],
  ['Linden, littleleaf Greenspire', 43.7568671051439, -79.481847438632],
  ['Maple, Norway', 43.7906549982723, -79.2177458991894],
  ['Mulberry', 43.6862400039996, -79.4507828835979],
  ['Maple, Norway', 43.6238968309856, -79.5239380694801],
  ['Linden, littleleaf Greenspire', 43.7998996602965, -79.3397467923357],
  ['Maple, silver', 43.6656782071615, -79.5253369471155],
  ['Spruce, Colorado blue', 43.7850557567039, -79.3352229778071],
  ['Oak, pin', 43.7706471102183, -79.1951229024572],
  ['Black locust', 43.6787024156445, -79.4050062459341],
  ['Honey locust', 43.6352903534985, -79.4260448161512],
  ['Birch, white', 43.6914137755237, -79.3752078400717],
  ['Apple, Sargents', 43.7812524957935, -79.3373243826614],
  ['Ginkgo', 43.7908460912473, -79.4074463381991],
  ['Spruce, white', 43.7424242018897, -79.4473638800047],
  ['Planetree, London Bloodgood', 43.6662736170257, -79.3441937005938],
  ['Dogwood, flowering', 43.6902614458412, -79.3217159713494],
  ['Pear Chanticleer', 43.7733415857776, -79.4249389678646],
  ['Spruce, Colorado blue', 43.6752509164076, -79.4386209924482],
  ['Birch', 43.6848913687907, -79.2789073534043],
  ['Honey locust Skyline', 43.7547706393986, -79.4832184321641],
  ['Mulberry, white', 43.6663357156555, -79.4077048824198],
  ['Apple', 43.6620777652894, -79.501002071281],
  ['Elm, Accolade', 43.7657152188815, -79.2583761814252],
  ['Tulip tree', 43.8216115761447, -79.2121396020778],
  ['Willow, black', 43.697310395725, -79.3404485529271],
  ['Elm, Pioneer', 43.7486359439202, -79.3755266601307],
  ['Maple, Norway', 43.6909651969595, -79.4602572362915],
  ['Buckeye, Ohio', 43.7815467495696, -79.3566163817693],
  ['Ginkgo', 43.7684413068471, -79.5230790006327],
  ['Spruce, white', 43.6960658750037, -79.2646046038889],
  ['Honey locust Shademaster', 43.8182179111161, -79.3147008669917],
  ['Maple, hedge', 43.754822068202, -79.307836183235],
  ['Kentucky coffeetree', 43.6840118399073, -79.3235766314121],
  ['Maple, Manitoba', 43.6593961671641, -79.457219453002],
  ['Oak, black', 43.6557251048137, -79.4835206723187],
  ['Spruce', 43.7389984812886, -79.246978813068],
  ['Birch, white', 43.6924468045725, -79.370216310189],
  ['Pine, Austrian', 43.7131650239832, -79.5659984268532],
  ['Linden, littleleaf', 43.6864201065337, -79.3444441970621],
  ['Pine, Austrian', 43.748802309348, -79.3749047778644],
  ['Honey locust Sunburst', 43.7385320911802, -79.6037350808543],
  ['Linden', 43.7089593906488, -79.3831728414254],
  ['Birch, white', 43.7034901172023, -79.501246890551],
  ['Maple, sugar', 43.6945198294731, -79.3975433324942],
  ['Pine, Austrian', 43.6843970601368, -79.5075817955817],
  ['Ginkgo', 43.7856274380797, -79.4746613235849],
  ['Birch', 43.7676152011686, -79.2198621720441],
  ['Honey locust', 43.772610764878, -79.5248879838162],
  ['Maple, sugar Green Mountain', 43.698577075971, -79.4912126796397],
  ['Oak, chinquapin', 43.6986660546316, -79.3275337957907],
  ['Maple, silver', 43.7964177776079, -79.3745155238261],
  ['Apple, Sargents', 43.7326845285147, -79.4002213433268],
  ['Linden, littleleaf', 43.7869007634307, -79.3601065994657],
  ['Maple', 43.8121128655821, -79.1825964886254],
  ['Maple, silver', 43.7222735365744, -79.5595074767236],
  ['Honey locust Skyline', 43.7676024333668, -79.5486409933116],
  ['Serviceberry', 43.6805903918272, -79.5146643884018],
  ['Maple, Manitoba', 43.680582108386, -79.4429830308469],
  ['Lilac, Japanese', 43.6563745172877, -79.3395479379813],
  ['Oak, red', 43.760682882977, -79.2239132294806],
  ['Honey locust', 43.6492941864715, -79.4219819711342],
  ['Larch', 43.6035482416723, -79.5016423953769],
  ['Spruce, Colorado blue', 43.6479431471631, -79.5352675770452],
  ['Catalpa, northern', 43.7251351200783, -79.5719982499343],
  ['Birch', 43.7690368884602, -79.2104951408643],
  ['Cherry', 43.6723751191569, -79.4476105368208],
  ['Mountain ash, European', 43.7527546015492, -79.4421708630079],
  ['Tulip tree', 43.6159783219158, -79.4929709396],
  ['Linden, littleleaf Greenspire', 43.6404165475363, -79.4246491423833],
  ['Maple, Freeman Autumn Blaze', 43.737301538995, -79.2385846080025],
  ['Serviceberry', 43.6941820674556, -79.4079682446058],
  ['Ginkgo', 43.6376822962559, -79.5185934372814],
  ['Maple, silver Queen', 43.7494948558248, -79.5320067104772],
  ['Maple, silver', 43.6708829201985, -79.5177522591284],
  ['Linden, littleleaf', 43.7927444648795, -79.3225126246692],
  ['Mulberry', 43.6398769718296, -79.4683897434021],
  ['Maple, Norway Emerald Queen', 43.6559380438809, -79.4306998084873],
  ['Maple, Norway', 43.6967165584859, -79.4905778835016],
  ['Oak, red', 43.7046824019256, -79.5022502418857],
  ['Tulip tree', 43.6465501089662, -79.5119941892736],
  ['Black locust', 43.7273021244431, -79.4287640812294],
  ['Maple, red', 43.6814514734061, -79.3603063972738],
  ['Lilac, Japanese', 43.5891202560808, -79.5386333557529],
  ['Planetree, London', 43.6762698274013, -79.3110220276907],
  ['Ginkgo', 43.7446728578906, -79.3510892167185],
  ['Linden, littleleaf', 43.8154767481724, -79.3312781181985],
  ['Kentucky coffeetree', 43.7406645226806, -79.2269550757908],
  ['Maple, sugar', 43.6396052471203, -79.4737220772787],
];

const trees: Tree[] = data.map(([name, lat, lng]) => {
  return {
    name,
    lat,
    lng,
    key: uuidv4(),
  };
});
export default trees;

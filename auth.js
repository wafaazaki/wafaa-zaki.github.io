document.addEventListener('DOMContentLoaded', function() {
    // دالة لفحص وتخزين البيانات في localStorage
    function saveToLocalStorage(key, data) {
        try {
            if (!Array.isArray(data)) {
                throw new Error(`Data for key "${key}" is not an array`);
            }
            localStorage.setItem(key, JSON.stringify(data));
            console.log(`Data saved to localStorage for key "${key}":`, data.length, 'items');
            return true;
        } catch (error) {
            console.error(`Error saving to localStorage for key "${key}":`, error);
            alert('حدث خطأ أثناء حفظ البيانات! تحقق من وحدة التحكم.');
            return false;
        }
    }

    // دالة لجلب البيانات من localStorage مع فحص السلامة
    function getFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(key);
            if (data === null || data === 'undefined') {
                console.log(`No data found in localStorage for key "${key}"`);
                return [];
            }
            const parsed = JSON.parse(data);
            if (!Array.isArray(parsed)) {
                throw new Error(`Data for key "${key}" is not an array`);
            }
            console.log(`Data loaded from localStorage for key "${key}":`, parsed.length, 'items');
            return parsed;
        } catch (error) {
            console.error(`Error loading from localStorage for key "${key}":`, error);
            return [];
        }
    }

    // إذا لم يكن هناك أدمنز أو طلاب، أنشئ القوائم
    function initializeDefaultData() {
        let admins = getFromLocalStorage('admins');
        let students = getFromLocalStorage('students');

        // تهيئة الأدمنز الافتراضيين فقط إذا لم يكن هناك أدمنز
        if (admins.length === 0) {
            console.log('No admins found, initializing default admins.');
            admins = [
                { username: 'wafaa_zaki', password: CryptoJS.SHA256('Wafaa123').toString(), fullName: 'Wafaa Zaki' },
                { username: 'ahmed_moussa', password: CryptoJS.SHA256('Moussa456').toString(), fullName: 'Ahmed Moussa' },
                { username: 'ahmed_elwany', password: CryptoJS.SHA256('Elwany789').toString(), fullName: 'Ahmed Elwany' },
                { username: 'yasmin_ms', password: CryptoJS.SHA256('Yasmin101').toString(), fullName: 'Yasmin' }
            ];
            saveToLocalStorage('admins', admins);
        }

        // تهيئة الطلاب الجدد (بدون طلاب افتراضيين)
        if (students.length === 0) {
            console.log('No students found, initializing new students.');
            students = [];
            const newStudents = [
                { fullName: 'احمد الطيب احمد عبد العزيز', id: '1001', username: 'ahmedabdulaziz01', password: 'Ahmed3924@' },
                { fullName: 'احمد حجاج احمد محمد', id: '1002', username: 'ahmedmohamed02', password: 'Ahmed6571#' },
                { fullName: 'أحمد سعدى سيد على', id: '1003', username: 'ahmedali03', password: 'Ahmed8246$' },
                { fullName: 'الحسن علي محمد علي', id: '1004', username: 'alhasanali04', password: 'Alhasan4719%' },
                { fullName: 'بولا صبحي جاد الرب لوندي', id: '1005', username: 'bolalondi05', password: 'Bola5138@' },
                { fullName: 'حذيفة رمضان عبد الحميد حامد', id: '1006', username: 'huthayfahamed06', password: 'Huthayfa7892#' },
                { fullName: 'حمزة يوسف شعبان عبد النعيم', id: '1007', username: 'hamzahabdulnayeem07', password: 'Hamzah3467$' },
                { fullName: 'خالد احمد امين السيد', id: '1008', username: 'khaledalsayed08', password: 'Khaled9215%' },
                { fullName: 'خالد علي عبد الرحيم عبد القادر', id: '1009', username: 'khaledabdulqadir09', password: 'Khaled6083@' },
                { fullName: 'روماني عبد عزيز عبد الملاك', id: '1010', username: 'romaniabdulmalak10', password: 'Romani2754#' },
                { fullName: 'زياد وائل محمد مهران', id: '1011', username: 'ziyadmehran11', password: 'Ziyad8421$' },
                { fullName: 'صالح حسن السيد احمد', id: '1012', username: 'salehahmed12', password: 'Saleh6197%' },
                { fullName: 'عبد الرحمن جابر عبد القادر احمد', id: '1013', username: 'abdulrahmanahmed13', password: 'Abdulrahman3845@' },
                { fullName: 'عبد الرحمن كامل محمد أحمد', id: '1014', username: 'abdulrahmanahmed14', password: 'Abdulrahman7502#' },
                { fullName: 'عبدالله مصطفى عبدالسميع', id: '1015', username: 'abdullahabdulsamea15', password: 'Abdullah4678$' },
                { fullName: 'على محمد عبد الدايم على', id: '1016', username: 'aliabduldayim16', password: 'Ali2356%' },
                { fullName: 'على منصور إبراهيم على', id: '1017', username: 'aliibrahim17', password: 'Ali8923@' },
                { fullName: 'عماد الدين محمد عربى إبراهيم', id: '1018', username: 'imaduddinibrahim18', password: 'Imaduddin5165#' },
                { fullName: 'عمرو خالد موسى احمد', id: '1019', username: 'amroahmed19', password: 'Amro6834$' },
                { fullName: 'كيرلس متي نبيل نصري', id: '1020', username: 'kirilsnasri20', password: 'Kirils3497%' },
                { fullName: 'ماجد عبد الكريم محمد عبد الراضي', id: '1021', username: 'majedabdulradi21', password: 'Majed7258@' },
                { fullName: 'مازن خالد محمد محمد', id: '1022', username: 'mazenmohamed22', password: 'Mazen4812#' },
                { fullName: 'محمد إبراهيم عبد الوهاب إبراهيم', id: '1023', username: 'mohamedibrahim23', password: 'Mohamed9516$' },
                { fullName: 'محمد خالد حسان احمد', id: '1024', username: 'mohamedahmed24', password: 'Mohamed6179%' },
                { fullName: 'محمد صالح عبد السميع متولي', id: '1025', username: 'mohamedmetwali25', password: 'Mohamed3741@' },
                { fullName: 'محمد عاطف عبدالله محمد', id: '1026', username: 'mohamedmohamed26', password: 'Mohamed8395#' },
                { fullName: 'محمد عامر قناوي عامر', id: '1027', username: 'mohamedamer27', password: 'Mohamed5064$' },
                { fullName: 'محمد على محمد حسان', id: '1028', username: 'mohamedhassan28', password: 'Mohamed2713%' },
                { fullName: 'محمود خليل عبد العزيز خليل', id: '1029', username: 'mahmoudkhaleel29', password: 'Mahmoud9472@' },
                { fullName: 'مصعب فراج سيد حمد', id: '1030', username: 'musabhamad30', password: 'Musab6125#' },
                { fullName: 'يوسف عبد الرحمن احمد مصطفى', id: '1031', username: 'yusufmustafa31', password: 'Yusuf3896$' },
                { fullName: 'يوسف عماد سامي قسطندي', id: '1032', username: 'yusufqistandi32', password: 'Yusuf7534%' },
                { fullName: 'احمد جابر أمين أبو بكر', id: '1033', username: 'ahmedabubakr33', password: 'Ahmed4287@' },
                { fullName: 'احمد محمد سلطان حسن', id: '1034', username: 'ahmedhassan34', password: 'Ahmed6942#' },
                { fullName: 'ادهم محمد حسين أبو الوفا', id: '1035', username: 'adhamabualwafa35', password: 'Adham3618$' },
                { fullName: 'إبراهيم عبد الحميد إبراهيم يونس', id: '1036', username: 'ibrahimyunis36', password: 'Ibrahim8264%' },
                { fullName: 'أحمد محمد عويس يوسف', id: '1037', username: 'ahmedyusuf37', password: 'Ahmed5925@' },
                { fullName: 'أحمد موسى أحمد حسين', id: '1038', username: 'ahmedhussein38', password: 'Ahmed2173#' },
                { fullName: 'أنس مالك حسن يوسف', id: '1039', username: 'anasyusuf39', password: 'Anas7828$' },
                { fullName: 'حسن محمود يوسف شرقاوي', id: '1040', username: 'hassansharaqawi40', password: 'Hassan5481%' },
                { fullName: 'سيف محمود رمضان أحمد', id: '1041', username: 'seifahmed41', password: 'Seif3156@' },
                { fullName: 'عبد الرحمن أشرف سيد أحمد', id: '1042', username: 'abdulrahmanahmed42', password: 'Abdulrahman6803#' },
                { fullName: 'عبد الرحمن طارق حمدان الضوى', id: '1043', username: 'abdulrahmanaldwa43', password: 'Abdulrahman9456$' },
                { fullName: 'عبد الرحمن محمود أحمد يونس', id: '1044', username: 'abdulrahmanyunis44', password: 'Abdulrahman4118%' },
                { fullName: 'عبد الله احمد عبد الجواد فهمي', id: '1045', username: 'abdullahfahmi45', password: 'Abdullah7772@' },
                { fullName: 'عبد الله أحمد بدوى عبد السميع', id: '1046', username: 'abdullahabdulsamiu46', password: 'Abdullah5437#' },
                { fullName: 'عمرو سيد أبو المجد احمد', id: '1047', username: 'amroahmed47', password: 'Amro2086$' },
                { fullName: 'كيرلس ايهاب عياد سويحه', id: '1048', username: 'kirilsswayha48', password: 'Kirils8735%' },
                { fullName: 'كمال محمود كمال على', id: '1049', username: 'kamalali49', password: 'Kamal6384@' },
                { fullName: 'مازن حسين عبد العاطى على', id: '1050', username: 'mazenali50', password: 'Mazen3049#' },
                { fullName: 'محمد إبراهيم بدري محجوب', id: '1051', username: 'mohamedmahjoub51', password: 'Mohamed7607$' },
                { fullName: 'محمد احمد السايح على', id: '1052', username: 'mohamedali52', password: 'Mohamed4262%' },
                { fullName: 'محمد صبري عبد الوهاب عبدالراضي', id: '1053', username: 'mohamedabdulradi53', password: 'Mohamed8916@' },
                { fullName: 'محمد عاشور أحمد خليل', id: '1054', username: 'mohamedkhaleel54', password: 'Mohamed6571#' },
                { fullName: 'محمد عثمان بدر عبد الوهاب', id: '1055', username: 'mohamedabdulwahab55', password: 'Mohamed8235$' },
                { fullName: 'محمد محمد الصادق محمد', id: '1056', username: 'mohamedmohamed56', password: 'Mohamed5884%' },
                { fullName: 'محمود حسنين عمر صالح', id: '1057', username: 'mahmoudsaleh57', password: 'Mahmoud3536@' },
                { fullName: 'محمود عبد الرحيم محمود حسن', id: '1058', username: 'mahmoudhassan58', password: 'Mahmoud7182#' },
                { fullName: 'معاذ احمد أبو زيد بدوي', id: '1059', username: 'muadhbadawi59', password: 'Muadh4845$' },
                { fullName: 'معاذ محمود حساني محمد', id: '1060', username: 'muadhmohamed60', password: 'Muadh9501%' },
                { fullName: 'معز عصمت عادل احمد', id: '1061', username: 'muazahmed61', password: 'Muaz6167@' },
                { fullName: 'مينا نبيل كامل عبد المسيح', id: '1062', username: 'minaabdulmasih62', password: 'Mina3813#' },
                { fullName: 'يحيى على عبد النعيم على', id: '1063', username: 'yahyaali63', password: 'Yahya8468$' },
                { fullName: 'اسامة عبد المحسوب يوسف', id: '1064', username: 'usamayusuf64', password: 'Usama5125%' },
                { fullName: 'الزهراء مصطفى عبد الزاق', id: '1065', username: 'alzahraaabdalzaq65', password: 'Alzahraa2784@' },
                { fullName: 'الشيماء محمد عبد الرحمن محمد', id: '1066', username: 'alshaimaamohamed66', password: 'Alshaimaa7442#' },
                { fullName: 'ايرين لطفي نسيم سمعان', id: '1067', username: 'irinsamaan67', password: 'Irin4097$' },
                { fullName: 'ايمان سعد رشيدي أبو الوفا', id: '1068', username: 'imanabualwafa68', password: 'Iman8751%' },
                { fullName: 'أمنية حسانين عزب حسانين', id: '1069', username: 'amniahhassanayn69', password: 'Amniyah5426@' },
                { fullName: 'أسماء صغير جمعة', id: '1070', username: 'asmaajumah70', password: 'Asmaa3183#' },
                { fullName: 'بوسي احمد محمد احمد', id: '1071', username: 'busiahmed71', password: 'Busi6838$' },
                { fullName: 'تسنيم على احمد محمود', id: '1072', username: 'tasnimmahmoud72', password: 'Tasnim2492%' },
                { fullName: 'تسنيم منتصر عبد الحميد محمد', id: '1073', username: 'tasnimmmohamed73', password: 'Tasnim9147@' },
                { fullName: 'جنة حسني خليل أحمد', id: '1074', username: 'jannahahmed74', password: 'Jannah7218#' },
                { fullName: 'جهاد هاني عبد الجواد مصطفى', id: '1075', username: 'jihadmoustafa75', password: 'Jihad7458$' },
                { fullName: 'رحاب رمضان محمد على', id: '1076', username: 'rehabali76', password: 'Rehab4115%' },
                { fullName: 'رؤى احمد عبد الرحيم سيد', id: '1077', username: 'ruayasayyid77', password: 'Ruaa9772@' },
                { fullName: 'ريفان احمد محمد كمال', id: '1078', username: 'rifankamal78', password: 'Rifan6440#' },
                { fullName: 'زينب عبد الرحيم محمد محمود', id: '1079', username: 'zainabmahmoud79', password: 'Zainab3096$' },
                { fullName: 'زينب عبد العزيز عبد السميع', id: '1080', username: 'zainababdulsamiu80', password: 'Zainab8753%' },
                { fullName: 'سلمى احمد السيد', id: '1081', username: 'salmaalsayed81', password: 'Salma5417@' },
                { fullName: 'لمياء احمد محمد', id: '1082', username: 'lamyiaamohamed82', password: 'Lamyiaa7082#' },
                { fullName: 'صفاء فراج محمد النجار', id: '1083', username: 'safaaalnnjar83', password: 'Safaa4745$' },
                { fullName: 'ضحى حسين زكي محمد', id: '1084', username: 'duhaamohamed84', password: 'Duhaa8408%' },
                { fullName: 'فاطمة أحمد حسان احمد', id: '1085', username: 'fatimaahmed85', password: 'Fatima6063@' },
                { fullName: 'مروة احمد حامد قناوي', id: '1086', username: 'marwaaqanawi86', password: 'Marwaa3718#' },
                { fullName: 'مريم عبدالرحمن محمد ابراهيم', id: '1087', username: 'maryamibrahim87', password: 'Maryam9374$' },
                { fullName: 'مريم محمد عبد المحسن محمود', id: '1088', username: 'maryammahmoud88', password: 'Maryam5030%' },
                { fullName: 'مريم محمود عبد الحفيظ احمد', id: '1089', username: 'maryamahmed89', password: 'Maryam7687@' },
                { fullName: 'ميرهان محمود محمد زكي', id: '1090', username: 'mirahanmohamed90', password: 'Mirahan4341#' },
                { fullName: 'مروة حسن محمد فرشوطي', id: '1091', username: 'marwaafarshuti91', password: 'Marwaa2906$' },
                { fullName: 'هاجر حجاج سيد النوبي', id: '1092', username: 'hajaralnubi92', password: 'Hajar8552%' },
                { fullName: 'ياسمين أحمد يوسف عثمان', id: '1093', username: 'yasminuthman93', password: 'Yasmin6227@' },
                { fullName: 'ياسمين رجب عياد مرعزي', id: '1094', username: 'yasminmarazi94', password: 'Yasmin3883#' },
                { fullName: 'اية محمد النوبي السمان', id: '1095', username: 'ayahalsaman95', password: 'Ayaah7538$' },
                { fullName: 'إسراء على محمد على', id: '1096', username: 'israaali96', password: 'Israa9203%' },
                { fullName: 'إسراء محمود عبد السلام عباس', id: '1097', username: 'israaabbas97', password: 'Israa5852@' },
                { fullName: 'أشرقت عبد الفتاح ذكى عبد السميع', id: '1098', username: 'ashraqatabdulsamiu98', password: 'Ashraqat3508#' },
                { fullName: 'اية عادل النادي جهلان', id: '1099', username: 'ayahjahlan99', password: 'Ayaah8263$' },
                { fullName: 'أنصاف محمد أحمد جاد', id: '1100', username: 'ansafjad00', password: 'Ansaf4925%' },
                { fullName: 'آلاء حمدي محمد كرم', id: '1101', username: 'alaakaram01', password: 'Alaa6910@' },
                { fullName: 'آلاء موسى محمد عادلي', id: '1102', username: 'alaauadali02', password: 'Alaa2576#' },
                { fullName: 'جمانة محمد حلمى رجب', id: '1103', username: 'jumanahrajab03', password: 'Jumanah9132$' },
                { fullName: 'جنة فيصل عبد المنعم بحر', id: '1104', username: 'jannahbahar04', password: 'Jannah6787#' },
                { fullName: 'حبيبة محمد أحمد حسن', id: '1105', username: 'habibahmohamed05', password: 'Habibah4441$' },
                { fullName: 'حسناء علي سعدي حسن', id: '1106', username: 'hasnaahasan06', password: 'Hasnaa8095%' },
                { fullName: 'حنين عبدالحسيب احمد', id: '1107', username: 'haninahmed07', password: 'Haninah5750@' },
                { fullName: 'دعاء الحسن محمد مدني', id: '1108', username: 'duaaamadani08', password: 'Duaaa3415#' },
                { fullName: 'ريتاج محمد الطاهر', id: '1109', username: 'ritajaltaahir09', password: 'Ritaj9071$' },
                { fullName: 'شمس حسين رمضان احمد', id: '1110', username: 'shamsahmed10', password: 'Shams6743%' },
                { fullName: 'شيماء عبد المنعم السايح على', id: '1111', username: 'shimaaali11', password: 'Shimaa4408@' },
                { fullName: 'ضحى بدوي حسن محمود', id: '1112', username: 'duhaamahmoud12', password: 'Duhaa8052#' },
                { fullName: 'فاطمة شعبان محمد السيد', id: '1113', username: 'fatimaalsayed13', password: 'Fatima5727$' },
                { fullName: 'فاطمة مرتضى عبد القادر', id: '1114', username: 'fatimaabdulqadir14', password: 'Fatima9293@' },
                { fullName: 'فرحة سالم إبراهيم سالم', id: '1115', username: 'farhahsalim15', password: 'Farhah6960#' },
                { fullName: 'مرفت مصطفى على يوسف', id: '1116', username: 'marafatyusuf16', password: 'Marafat4624$' },
                { fullName: 'مروة خالد محمد البسطاوي', id: '1117', username: 'marwaaalbastawi17', password: 'Marwaa3280%' },
                { fullName: 'ملك محمد قرقار محمد', id: '1118', username: 'malakmohamed18', password: 'Malak5127$' },
                { fullName: 'منة منصور أبو الحجاج السيد', id: '1119', username: 'minahalsayed19', password: 'Minah7893#' },
                { fullName: 'نوال عصام احمد محمد', id: '1120', username: 'nawalahmed20', password: 'Nawal3468@' },
                { fullName: 'نورهان رفاعي عبد الحميد توفيق', id: '1121', username: 'nurhantawfiq21', password: 'Nurhan6241%' },
                { fullName: 'هاجر قرني خيري عرفات', id: '1122', username: 'hajararafat22', password: 'Hajar8916$' },
                { fullName: 'هند خليفة محمود علي', id: '1123', username: 'hindali23', password: 'Hind4572#' },
                { fullName: 'ياسمين منصور عبيد احمد', id: '1124', username: 'yasminahmed24', password: 'Yasmin7038@' }
            ];

            // إنشاء بيانات الطلاب
            newStudents.forEach(student => {
                students.push({
                    username: student.username,
                    password: CryptoJS.SHA256(student.password).toString(),
                    fullName: student.fullName,
                    id: student.id,
                    subjects: [], // بدون درجات حاليًا
                    profile: { // إضافة حقل الملف الشخصي
                        email: '',
                        phone: '',
                        birthdate: '',
                        address: '',
                        bio: ''
                    },
                    originalPassword: student.password // لتخزين كلمة المرور غير المشفرة مؤقتًا
                });
            });

            saveToLocalStorage('students', students);
        }
    }

    // استدعاء التهيئة
    initializeDefaultData();

    // التحقق من تسجيل الدخول في كل صفحة
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['index.html', 'admin.html', 'profile.html'];
    
    if (protectedPages.includes(currentPage)) {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (!loggedInUser) {
            console.log('No logged-in user, redirecting to login.html');
            window.location.href = 'login.html';
            return;
        }
        if (loggedInUser.type === 'student' && currentPage === 'admin.html') {
            alert('غير مصرح لك بدخول لوحة تحكم الأدمن!');
            window.location.href = 'index.html';
            return;
        }
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            const admins = getFromLocalStorage('admins');
            const students = getFromLocalStorage('students');
            const user = loggedInUser.type === 'admin' 
                ? admins.find(a => a.username === loggedInUser.username)
                : students.find(s => s.username === loggedInUser.username);
            if (user) {
                welcomeMessage.textContent = `مرحبًا، ${user.fullName || user.name}`;
                console.log('Welcome message set for:', user.fullName || user.name);
            } else {
                console.error('User not found for welcome message:', loggedInUser);
            }
        }
    }

    // التعامل مع نموذج تسجيل الدخول
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            console.log('Login attempt:', { username });

            if (!username || !password) {
                alert('يرجى إدخال اسم المستخدم وكلمة المرور!');
                console.warn('Empty username or password');
                return false;
            }

            let hashedPassword;
            try {
                hashedPassword = CryptoJS.SHA256(password).toString();
                console.log('Hashed password for login:', hashedPassword.length, 'characters');
            } catch (error) {
                console.error('CryptoJS error:', error);
                alert('خطأ في تشفير كلمة المرور! تأكد من تحميل مكتبة CryptoJS.');
                return false;
            }

            // جلب أحدث بيانات الأدمنز والطلاب
            const admins = getFromLocalStorage('admins');
            const students = getFromLocalStorage('students');

            console.log('Admins loaded for login:', admins.map(a => a.username));

            const admin = admins.find(a => a.username === username && a.password === hashedPassword);
            if (admin) {
                console.log('Admin login successful:', admin.username);
                localStorage.setItem('loggedInUser', JSON.stringify({ 
                    username: admin.username, 
                    type: 'admin',
                    fullName: admin.fullName 
                }));
                window.location.href = 'index.html';
                return true;
            }

            const student = students.find(s => s.username === username && s.password === hashedPassword);
            if (student) {
                console.log('Student login successful:', student.username);
                localStorage.setItem('loggedInUser', JSON.stringify({ 
                    username: student.username,
                    type: 'student',
                    fullName: student.fullName 
                }));
                window.location.href = 'index.html';
                return true;
            }

            console.warn('Login failed: Invalid username or password', { username, hashedPassword });
            alert('اسم المستخدم أو كلمة المرور غير صحيحة! تأكد من البيانات وأعد المحاولة.');
            return false;
        });
    } else {
        console.log('Login form not found on this page');
    }
});

// دالة تسجيل الخروج
window.logout = function() {
    if (confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟')) {
        localStorage.removeItem('loggedInUser');
        console.log('User logged out, only loggedInUser removed');
        window.location.href = 'login.html';
        return true;
    }
    return false;
};
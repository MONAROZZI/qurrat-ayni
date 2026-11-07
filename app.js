const groups=[
["💌","صراحة من القلب","honesty",[
["light","شو أول صفة بتلفت انتباهك بالشخص؟","احكوا عن الفرق بين الانطباع الأول والصفات الأساسية."],
["light","شو تفصيل صغير ممكن يحسّنك يومك؟","لاحظوا الاحتياجات اليومية."],
["deep","شو أكثر شي بيخليك تحس بالأمان بالعلاقة؟","اسألوا عن أمثلة حقيقية."],
["deep","شو عادة عندك بتشتغل على تغييرها؟","الوعي الذاتي أهم من الكمال."],
["deep","كيف بتتعامل مع اعتذار ما كان كافي بالنسبة إلك؟","ناقشوا الإصلاح بدل اللوم."]]],
["🌙","دين وقيم","faith",[
["light","شو عبادة بتحب نحافظ عليها سوا بعد الزواج؟","احكوا عن الممارسة الواقعية."],
["deep","إذا اختلفنا برأي ديني، كيف بنبحث عن جواب باحترام؟","ركّزوا على أسلوب الاختلاف."],
["deep","شو معنى القوامة والمسؤولية المشتركة بالنسبة إلك؟","وضّحوا التوقعات العملية."],
["deep","كيف بتتخيّل تربية أولادنا دينيًا؟","ناقشوا القدوة والحوار."],
["deep","كيف نوازن بين علاقتنا بالأهل واستقلال بيتنا؟","حدود واضحة مع البرّ والاحترام."]]],
["👑","Bare Minimum / Princess Treatment","princess",[
["light","يتذكّر موعد مهم إلك: Bare Minimum ولا Princess Treatment؟ وليش؟","التصنيفات بتختلف من شخص لآخر."],
["light","يسأل عن يومك ويصغي بدون موبايل: أي تصنيف؟","فكّروا بجودة الاهتمام."],
["deep","يعتذر بوضوح ويغيّر السلوك بعد الغلط: أي تصنيف؟","الاعتذار بدون تغيير مش كافي."],
["deep","يخطط لزيارة رغم المسافة: أي تصنيف؟ وشو الحدود الواقعية؟","راعوا الوقت والمال والظروف."],
["light","يفاجئك برسالة مكتوبة بخط إيده: أي تصنيف؟","شو لغة الحب المفضلة؟"]]],
["🎭","لو كنت مكاني؟","scenarios",[
["deep","صار خلاف بينا قبل النوم وإحنا ببلدين مختلفين. كيف نتصرف؟","حدّدوا وقتًا مناسبًا للعودة للنقاش."],
["deep","أنا متضايقة بس مش جاهزة أحكي. شو بتعمل؟","احترام المساحة مع الطمأنة."],
["deep","أحد أفراد العائلة تدخّل بقرار خاص فينا. كيف بتحط حدود؟","الشراكة مش مواجهة مع الأهل."],
["deep","تأخر أحدنا عن مكالمة مهمة بدون خبر. شو رد فعلك؟","اتفاقات التواصل أهم من الافتراض."],
["light","خطتنا لليوم تغيّرت فجأة. كيف بتتأقلم؟","اختبروا المرونة."]]],
["🏡","بيتنا المستقبلي","future",[
["light","كيف بتتخيّل يوم جمعة عادي ببيتنا؟","الصورة اليومية بتكشف التوقعات."],
["deep","كيف نقسم شغل البيت لما نكون الاثنين مشغولين؟","ناقشوا المسؤولية بعدل."],
["deep","كيف بنتفق على الادخار والمصاريف ومساعدة الأهل؟","الوضوح المالي مهم."],
["deep","إذا اختلفنا بقرار الإنجاب أو توقيته، كيف نتناقش؟","ما في داعي للاستعجال بالجواب."],
["deep","وين بتحب نعيش بعد الزواج؟ وشو الخطة الواقعية؟","حوّلوا الأمنيات لخطوات."]]],
["💗","لغة الحب","love",[
["light","شو لفتة صغيرة بتخليك تحس إنك محبوب؟","انتبهوا لاختلاف لغات الحب."],
["deep","لما تكون مضغوط، بتحب قرب ولا مساحة؟","اسألوا عن إشارات واضحة."],
["deep","كيف بتحب نعبّر عن الغيرة بطريقة صحية؟","الغيرة ما بتبرر السيطرة."],
["light","شو شكل موعد مثالي عن بُعد بالنسبة إلك؟","اختاروا نشاطًا قابلًا للتنفيذ."],
["deep","شو حدود الخصوصية اللي بتحتاجها حتى بعلاقة قريبة؟","الثقة لا تعني إلغاء الخصوصية."]]],
["⚖️","اتفقنا أو اختلفنا","agree",[
["deep","المصاريف الكبيرة لازم تكون بقرار مشترك. موافق، محايد، أو غير موافق؟","احكوا عن حدود القرار المشترك."],
["deep","من الطبيعي يكون لكل طرف وقت خاص وأصدقاء. شو رأيك؟","وازنوا بين الاستقلال والالتزام."],
["deep","وقت الخلاف الأفضل نأخذ استراحة قصيرة ونرجع نحكي. شو رأيك؟","اتفقوا على موعد العودة."],
["light","السفر أهم من شراء أغراض فخمة. شو رأيك؟","الأولويات بتتغيّر حسب الظروف."],
["deep","مشاركة كلمات السر دليل ثقة. شو رأيك؟","الخصوصية حق مش دليل إخفاء."]]],
["🧩","اختار بين اثنين","choices",[
["light","سهرة هادئة بالبيت ولا طلعة مفاجئة؟","ليش اخترت هيك؟"],
["deep","راتب أعلى مع وقت أقل، ولا راتب متوسط ووقت للعيلة؟","ناقشوا الواقع مش المثاليات."],
["light","تخطيط دقيق للسفر ولا مغامرة عفوية؟","هل في حل وسط؟"],
["deep","تواجه المشكلة فورًا ولا تحتاج وقتًا لتهدأ؟","كيف تتفقوا على أسلوب مناسب؟"],
["deep","الاستقرار ببلد واحد ولا تجربة العيش ببلدان مختلفة؟","ناقشوا الظروف العائلية والمهنية."]]],
["🛠️","أصلح الموقف","repair",[
["deep","حكيت كلمة جرحتني قدام الناس. كيف بتعتذر وبتصلح؟","التغيير العملي جزء من الاعتذار."],
["deep","نسيت وعد مهم. شو الخطوة الأولى لإعادة الثقة؟","اسألوا عن التعويض المناسب."],
["deep","فهمت رسالتي بطريقة غلط وصار توتر. كيف بنتأكد من النية؟","وضّحوا بدل ما تتهموا."],
["deep","صار بينا خلاف متكرر. متى نطلب مساعدة مختص؟","الاستعانة بالمساعدة علامة نضج."],
["light","تأخرت عن موعدنا أونلاين. شو رسالة الاعتذار المناسبة؟","جرّبوا صياغتها."]]],
["🧠","قديش بتعرفني؟","know",[
["light","توقّع: شو المشروب اللي بحبه وقت الراحة؟","بعد التوقع خلّي الطرف الثاني يجاوب."],
["light","توقّع: شو أكثر نشاط بيخفف عني الضغط؟","احكوا كيف عرفتوا."],
["deep","توقّع: شو أكبر خوف عندي من الزواج؟","تأكدوا بدون حكم."],
["light","توقّع: شو المكان اللي بحب أزوره؟","احتفظوا بفكرة لموعد قادم."],
["deep","توقّع: شو الشي اللي بحتاج أسمعه بعد خلاف؟","تعلموا كيف تطمئنوا بعض."]]],
["💰","ميزانية بيتنا","money",[
["deep","لو دخلنا الشهري 2000 وحدة، كيف نوزعه على الضروريات والادخار والرفاهية؟","اكتبوا نسب تقريبية."],
["deep","هل لازم يكون في حساب مشترك، حسابات منفصلة، أو الاثنين؟","ناقشوا الشفافية والاستقلال."],
["deep","لو فقد أحدنا عمله مؤقتًا، شو أول 3 خطوات؟","ابحثوا عن روح الفريق."],
["deep","كيف نتعامل مع الديون قبل الزواج؟","الصدق أساسي."],
["light","تفضل هدية بسيطة شخصية ولا هدية غالية؟","السعر مش مقياس المحبة."]]],
["✈️","بين بلدين","distance",[
["deep","شو الخطة الواقعية للانتقال والعيش بنفس البلد؟","حدّدوا جدولًا زمنيًا مبدئيًا."],
["deep","كم مرة التواصل بالأسبوع بتشوفها مناسبة؟","الاحتياج ممكن يختلف."],
["deep","كيف نبني ثقة بدون مراقبة أو طلب إثباتات مستمرة؟","الاتفاق الواضح أهم من التفتيش."],
["light","شو نشاط أونلاين بتحب نعمله سوا؟","جرّبوا موعدًا رقميًا."],
["deep","كيف نخطط للزيارة ونتفق على المصاريف والتوقعات؟","راعوا السلامة والوضوح."]]],
["🚦","حدود وإشارات","boundaries",[
["deep","شو تصرّف بتعتبره خط أحمر في أي علاقة؟","تأكدوا من فهم السبب."],
["deep","كيف بتتعامل مع رفض الطرف الثاني لطلبك؟","الاحترام يظهر عند الرفض."],
["deep","شو الفرق عندك بين الغيرة والسيطرة؟","ابحثوا عن حدود واضحة."],
["deep","هل بتشوف إن الصراخ أثناء الخلاف مقبول؟ وليش؟","الأمان العاطفي غير قابل للمساومة."],
["light","شو سلوك بسيط بتعتبره Green Flag؟","اسألوا عن أمثلة."]]],
["💌","رسالة من المستقبل","letters",[
["light","كمّل: بعد خمس سنوات، أكثر ذكرى حلوة بينا هي…","احكوا عن الحياة اللي بتتمنوها."],
["deep","كمّل: وقت مرقنا بمرحلة صعبة، اللي ساعدنا هو…","شو الموارد اللي عندكم؟"],
["light","كمّل: أكثر عادة لطيفة حافظنا عليها هي…","اختاروا عادة صغيرة من اليوم."],
["deep","كمّل: تعلّمت منك معنى…","ركّزوا على النمو المتبادل."],
["deep","كمّل: الشي اللي بتمنى ما ننساه أبدًا هو…","اختاروا قيمة مشتركة."]]]
];
let myVote=null,otherVote=null;
// إضافات النسخة الثانية: 238 سؤالاً جديداً بثلاث درجات عمق.
groups.forEach((g,gi)=>extraQuestions[gi].forEach((q,j)=>g[3].push([j<5?'light':j<11?'deep':'critical',q,'اسألوا عن مثال واقعي، واحترموا اختلاف وجهات النظر.'])));
const history=new Map();
let gameType='talk',myGuess='',otherGuess='';
function questionKey(){return groups[selected][2]+':'+all()[index][1]}
function recordVote(){
 if(mode==='solo'||!connected||myVote===null||otherVote===null)return;
 const key=questionKey(),result=myVote&&otherVote?'match':(!myVote&&!otherVote?'different':'review');
 history.set(key,{category:selected,result});
 renderCompass();
}
function renderCompass(){
 const values=[...history.values()];
 $('matchCount').textContent=values.filter(v=>v.result==='match').length;
 $('diffCount').textContent=values.filter(v=>v.result!=='match').length;
 $('reviewCount').textContent=values.length;
 const root=$('compassRows');root.replaceChildren();
 groups.forEach((g,i)=>{
  const items=values.filter(v=>v.category===i);
  if(!items.length)return;
  const matches=items.filter(v=>v.result==='match').length;
  const percent=Math.round(100*matches/items.length);
  const row=document.createElement('div');row.className='compass-row';
  const head=document.createElement('div');head.className='compass-row-head';
  const label=document.createElement('strong');label.textContent=g[0]+' '+g[1];
  const count=document.createElement('span');count.textContent=matches+' من '+items.length+' متشابهة ('+percent+'%)';
  const track=document.createElement('div');track.className='compass-track';
  const fill=document.createElement('div');fill.className='compass-fill';fill.style.width=percent+'%';
  head.append(label,count);track.append(fill);row.append(head,track);root.append(row);
 });
 if(!values.length){const hint=document.createElement('p');hint.className='hint';hint.textContent='لسه ما قيّمتوا أي سؤال سوا. ابدأوا بسؤال واكشفوا الإجابات ثم قيّموها.';root.append(hint)}
}
function renderGame(){
 const prompts={talk:'كل شخص يجاوب بصراحة وبراحته.',guess:'اكتبي جوابك وتوقّعك لإجابة الطرف الثاني قبل الكشف.',choice:'اختاروا رأيكم وفسّروا السبب، حتى لو اختلفتوا.',scenario:'تخيّلوا الموقف واحكوا عن رد فعلكم الواقعي.',princess:'صنّفوا التصرف: Bare Minimum أو Princess Treatment، وليش؟'};
 $('answerInstructions').textContent=prompts[gameType];
 $('guessBox').hidden=gameType!=='guess';
}
let selected=0,index=0,mode='solo',peer=null,conn=null,localAnswer='',remoteAnswer='',remoteSaved=false,localSaved=false,shown=false,room='',connected=false;
const $=id=>document.getElementById(id);
const all=()=>groups[selected][3].filter(q=>$('level').value==='all'||q[0]===$('level').value);
function drawCats(){ $('categories').innerHTML='';groups.forEach((g,i)=>{const b=document.createElement('button');b.className='category'+(i===selected?' active':'');b.innerHTML='<strong>'+g[0]+' '+g[1]+'</strong><small>'+g[3].length+' أسئلة</small>';b.onclick=()=>{if(mode!=='solo'&&connected&&mode==='guest')return notice('صاحب الغرفة بيختار القسم.');selected=i;index=0;reset();render();sendState()};$('categories').append(b)})}
function render(){drawCats();const qs=all();if(index>=qs.length)index=0;const q=qs[index];$('catLabel').textContent=groups[selected][1];$('levelLabel').textContent=q[0]==='critical'?'سؤال مصيري':q[0]==='deep'?'حديث عميق':'حديث خفيف';$('questionText').textContent=q[1];$('questionTip').textContent=q[2];$('questionTip').hidden=true;$('counter').textContent=(index+1)+' / '+qs.length}
function notice(t){$('status').textContent=t}
function reset(){myVote=null;otherVote=null;$('matchPanel').hidden=true;$('celebration').hidden=true;$('voteStatus').textContent='';localAnswer='';remoteAnswer='';myGuess='';otherGuess='';localSaved=false;remoteSaved=false;shown=false;$('answer').value='';$('guessAnswer').value='';$('answers').hidden=true;$('answers').replaceChildren();$('revealBtn').textContent='إظهار الإجابات'}
function send(obj){if(conn&&conn.open)conn.send(obj)}
function sendState(){send({type:'state',selected,index,level:$('level').value,gameType})}
function next(){if(mode==='guest'&&connected)return notice('صاحب الغرفة بيقلب البطاقة التالية.');index=(index+1)%all().length;reset();render();sendState()}
$('nextBtn').onclick=next;$('tipBtn').onclick=()=>{$('questionTip').hidden=!$('questionTip').hidden};
$('level').onchange=()=>{if(mode==='guest'&&connected){notice('صاحب الغرفة بيختار المستوى.');return}index=0;reset();render();sendState()};
$('saveBtn').onclick=()=>{localAnswer=$('answer').value.trim();localSaved=true;myGuess=gameType==='guess'?$('guessAnswer').value.trim():'';send({type:'answer',text:localAnswer,guess:myGuess});notice(mode==='solo'?'انحفظ جوابك مؤقتًا بهالجلسة.':'وصل جوابك للطرف الثاني، وبيظهر لما تختاروا الكشف.');if(shown)showAnswers()};
$('revealBtn').onclick=()=>{shown=!shown;send({type:'reveal',shown});showAnswers()};
function showAnswers(){const box=$('answers');box.replaceChildren();box.hidden=!shown;$('matchPanel').hidden=!shown;$('revealBtn').textContent=shown?'إخفاء الإجابات':'إظهار الإجابات';if(!shown)return;const entries=[['جوابي',localSaved?(localAnswer||'تجاوزت السؤال'):'لسه ما حفظت جوابي']];if(mode!=='solo')entries.push(['جواب الطرف الثاني',remoteSaved?(remoteAnswer||'تجاوز السؤال'):'لسه ما وصل جواب']);if(gameType==='guess'){entries.push(['توقعي لإجابته',myGuess||'ما في توقع']);if(mode!=='solo')entries.push(['توقعه لإجابتي',otherGuess||'ما في توقع'])}entries.forEach(([label,value])=>{let div=document.createElement('div');div.className='answerbox';let strong=document.createElement('strong');strong.textContent=label;let p=document.createElement('span');p.textContent=value;div.append(strong,p);box.append(div)})}
function cleanup(){if(conn){try{conn.close()}catch(e){}}if(peer){try{peer.destroy()}catch(e){}}conn=null;peer=null;connected=false;room='';reset()}
function switchMode(m){cleanup();mode=m;['soloBtn','hostBtn','joinBtn'].forEach((id,i)=>$(id).classList.toggle('active',['solo','host','guest'][i]===m));$('roomControls').hidden=m==='solo';$('roomCode').value='';$('roomCode').readOnly=m==='host';$('roomAction').textContent=m==='host'?'إنشاء غرفة':'انضمام';$('roomHint').textContent=m==='host'?'انسخي الرمز وابعتيه للشخص الثاني. خلي الصفحة مفتوحة.':'اطلبي الرمز من الشخص اللي أنشأ الغرفة.'; $('connection').textContent=m==='solo'?'♡ وضع فردي':'◌ غير متصل';notice(m==='solo'?'اختاري قسم وابدئي براحتك.':'يحتاج الوضع المشترك اتصال إنترنت وخدمة PeerJS الخارجية.')}
$('soloBtn').onclick=()=>switchMode('solo');$('hostBtn').onclick=()=>switchMode('host');$('joinBtn').onclick=()=>switchMode('guest');
function onConnection(c){if(conn&&conn.open){c.close();return}conn=c;c.on('open',()=>{connected=true;$('connection').textContent='● متصلين ♡';notice('اتصلتوا! جاوبوا على نفس البطاقة.');if(mode==='host')sendState()});c.on('data',data=>{if(!data||typeof data!=='object')return;if(data.type==='state'&&mode==='guest'){selected=Math.max(0,Math.min(groups.length-1,Number(data.selected)||0));$('level').value=['all','light','deep','critical'].includes(data.level)?data.level:'all';index=Math.max(0,Math.min(all().length-1,Number(data.index)||0));gameType=['talk','guess','choice','scenario','princess'].includes(data.gameType)?data.gameType:'talk';$('gameType').value=gameType;reset();render();renderGame()}if(data.type==='answer'){remoteAnswer=String(data.text||'').slice(0,4000);otherGuess=String(data.guess||'').slice(0,4000);remoteSaved=true;if(shown)showAnswers();notice('الطرف الثاني حفظ جوابه ♡')}if(data.type==='reveal'){shown=!!data.shown;showAnswers()}if(data.type==='vote'){otherVote=!!data.similar;updateMatch()}if(data.type==='clearCompass'){history.clear();renderCompass()}});c.on('close',()=>{connected=false;$('connection').textContent='◌ انقطع الاتصال';notice('انقطع الاتصال. جرّبوا غرفة جديدة.');});c.on('error',()=>notice('صار خطأ بالاتصال. جرّبوا غرفة جديدة.'))}
$('roomAction').onclick=()=>{if(typeof Peer==='undefined')return notice('تعذّر تحميل خدمة الاتصال. تأكدي من الإنترنت.');cleanup();if(mode==='host'){$('roomCode').value=Math.random().toString(36).slice(2,8).toUpperCase()}room=$('roomCode').value.trim().toUpperCase();if(!/^[A-Z0-9]{6}$/.test(room))return notice('اكتبي رمز مكوّن من 6 أحرف إنجليزية أو أرقام.');$('roomCode').value=room;peer=mode==='host'?new Peer('qurrat-ayni-'+room):new Peer();peer.on('open',()=>{if(mode==='host'){notice('الغرفة جاهزة! ابعتي الرمز '+room+' وانتظري الطرف الثاني.')}else{notice('جاري الاتصال بالغرفة…');onConnection(peer.connect('qurrat-ayni-'+room,{reliable:true}))}});peer.on('connection',c=>{if(mode==='host')onConnection(c);else c.close()});peer.on('error',e=>{notice(e.type==='unavailable-id'?'الرمز مستخدم. أنشئي غرفة جديدة.':'تعذّر الاتصال. تأكدوا من الرمز والإنترنت وحاولوا من جديد.')});peer.on('disconnected',()=>{if(!connected)notice('خدمة الاتصال غير متاحة مؤقتًا.')})};

$('matchYes').onclick=()=>castVote(true);$('matchNo').onclick=()=>castVote(false);
function castVote(similar){myVote=similar;send({type:'vote',similar});updateMatch()}
function updateMatch(){
 const status=$('voteStatus'),panel=$('celebration');panel.hidden=true;
 if(myVote===null){status.textContent=otherVote===null?'اختاروا رأيكم بعد قراءة الإجابات.':'الطرف الثاني اختار، دورك الآن ♡';return}
 if(mode!=='solo'&&connected&&otherVote===null){status.textContent='تم تسجيل رأيك، ننتظر رأي الطرف الثاني ♡';return}
 if(mode==='solo'){status.textContent='هذا تقييمك الشخصي. للمقارنة بينكما استخدما غرفة مشتركة.';return}
 if(!connected){status.textContent='لا يوجد اتصال حاليًا. المقارنة تحتاج اتصال الطرفين.';return}
 const agree=myVote&&otherVote;const disagree=!myVote&&!otherVote;
 $('celebrateTitle').textContent=agree?'برافو عليكم! على نفس الموجة 💚':disagree?'أحسنتم! اكتشفتوا اختلاف لطيف 🌷':'كل رأي بيستاهل ينسمع ♡';
 $('celebrateText').textContent=agree?'لحظة توافق حلوة! احكوا ليش اخترتوا نفس الجواب.':disagree?'حلو إنكم لاحظتوا الاختلاف. خلّوه بداية حوار.':'أحدكما شاف تشابه والثاني اختلاف. احكوا عن السبب بهدوء.';
 status.textContent='وصل رأيكم الاثنين ✨';panel.hidden=false;recordVote();
}

$('gameType').onchange=()=>{
 if(mode==='guest'&&connected){$('gameType').value=gameType;return notice('صاحب الغرفة بيختار نوع اللعبة.')}
 gameType=$('gameType').value;reset();renderGame();sendState();
};
$('randomBtn').onclick=()=>{
 if(mode==='guest'&&connected)return notice('صاحب الغرفة بيختار السؤال.');
 selected=Math.floor(Math.random()*groups.length);index=Math.floor(Math.random()*all().length);reset();render();sendState();
};
$('resetCompass').onclick=()=>{
 if(!confirm('بدك تمسحي نتائج البوصلة المؤقتة وتبدؤوا من جديد؟'))return;
 history.clear();renderCompass();send({type:'clearCompass'});
};
window.addEventListener('beforeunload',cleanup);
render();renderGame();renderCompass();
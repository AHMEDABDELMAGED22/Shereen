document.getElementById('year').textContent = new Date().getFullYear();

const filterChips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
filterChips.forEach(chip=>{
  chip.addEventListener('click',()=>{
    filterChips.forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    cards.forEach(card=>{
      const show = (f==='all') || card.dataset.category===f;
      card.style.display = show ? 'flex' : 'none';
    });
    document.getElementById('works').scrollIntoView({behavior:'smooth', block:'start'});
  })
})

const modal = document.getElementById('reader');
const readerTitle = document.getElementById('readerTitle');
const readerBody = document.getElementById('readerBody');
document.querySelectorAll('.read-more').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const card = e.target.closest('.card');
    const title = card.querySelector('h3').textContent;
    const fullText = card.getAttribute('data-full') || '—';
    

    
    readerTitle.textContent = title;
    readerBody.textContent = fullText;
    readerBody.style.whiteSpace = 'pre-wrap';
    readerBody.style.lineHeight = '2';
    modal.showModal();
  })
})
document.getElementById('closeModal').addEventListener('click',()=>modal.close());

document.querySelectorAll('.copy-link').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const card = e.target.closest('.card');
    const slug = card.querySelector('h3').textContent.trim().replace(/\s+/g,'-');
    const url = location.origin + location.pathname + `#` + encodeURIComponent(slug);
    navigator.clipboard.writeText(url).then(()=>{
      btn.textContent = 'تم النسخ ✅';
      setTimeout(()=>btn.textContent='نسخ رابط',1200)
    })
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.textContent = 'أقرئني المزيد';
  });
});

const quotes = [
  { t:"لكني أؤمن أن عيون امراة محروسة بالحُب هو التعريف المقدس للفن.", a:"شيرين" },
  { t:"هذه الفوضىٰ التي تعجُ داخلي تحتاج يدك لترتبها.", a:"شيرين" },
  { t:"كان يُقبّل كُل ما شعر أنه بحاجة لحنان لم أشر لموضع الجُرج كان يتبع حدسه حتىٰ تنهيدتي كان يُمسد عليها برقة!", a:"شيرين" },
  { t:"هذا الصدر رُغم كثرة حروبه بات جنّة منذُ أن سكنت بهِ!", a:"شيرين" },
];
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
let qi = 0;
setInterval(()=>{
  qi = (qi+1) % quotes.length;
  quoteText.style.opacity = 0; quoteAuthor.style.opacity = 0;
  setTimeout(()=>{
    quoteText.textContent = `"${quotes[qi].t}"`;
    quoteAuthor.textContent = `— ${quotes[qi].a}`;
    quoteText.style.opacity = 1; quoteAuthor.style.opacity = 1;
  }, 250);
}, 4000);

const hq = quotes[Math.floor(Math.random()*quotes.length)];
document.getElementById('heroQuote').textContent = `"${hq.t}"`;
document.getElementById('heroAuthor').textContent = `— ${hq.a}`;

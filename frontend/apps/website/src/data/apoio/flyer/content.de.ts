// German flyer copy — for expat business owners. First-pass translation by vibe-dev,
// close to literal; Zapa reviews/edits wording later. See content.ts for the shared
// shape and content.en.ts for the English original.
import type { FlyerContent } from './content';

const content: FlyerContent = {
  merchantCount: '170+',

  reasons: [
    {
      title: 'Sie sind nicht der Erste, aber Sie könnten der Beste sein.',
      body: ['Über 170 Unternehmen auf Madeira machen das schon. Es ist bewährt, es ist real.'],
    },
    {
      title: 'Kostenlose Werbung, echter Netzwerkeffekt.',
      body: [
        'Ein kostenloser Eintrag auf der BTC Map, wo eine lebendige, aktive Community jeden Ort findet, an dem sie mit Bitcoin bezahlen kann.',
      ],
    },
    {
      title: 'Bessere Kunden, und mehr Kunden.',
      body: [
        'Bitcoiner wollen echten Wert, keine Schnäppchen.',
        'Sie schätzen Qualität und guten Service, egal in welcher Branche.',
      ],
    },
    {
      title: 'Wir unterstützen unsere eigenen Leute.',
      body: [
        'Nicht jeder zahlt bei jedem Besuch in Bitcoin, aber die Community kommt immer wieder und empfiehlt die Orte weiter, die Bitcoin akzeptieren.',
      ],
    },
  ],

  backCoverHeading: 'Fragen? Etwas funktioniert nicht?',
  backCoverBlurb: [
    'Wir sind FREE Madeira, eine gemeinnützige Organisation, gegründet 2022, das Team hinter Bitcoin Atlantis.',
    'Wir helfen Ihnen kostenlos bei der Einrichtung und unterstützen Sie gerne, wenn etwas schiefgeht.',
  ],

  faqHeading: 'Häufige Fragen',
  faq: [
    {
      q: 'Wann werde ich bezahlt?',
      a: [
        'Der Euro-Betrag wird zum Zeitpunkt des Verkaufs festgelegt.',
        'Die Auszahlung auf Ihr Bankkonto erfolgt in der Regel am nächsten Werktag.',
      ],
    },
    {
      q: 'Was kostet das?',
      a: ['Swiss Bitcoin Pay verlangt 1,5%.'],
    },
    {
      q: 'Kann ich jederzeit aufhören?',
      a: ['Ja. Keine Mindestlaufzeit, keine Verpflichtungen.'],
    },
  ],

  whatsappSupportLabel: 'WhatsApp-Support für Händler',
  whatsappSupportBody: 'Live-Fragen und Antworten mit FREE und anderen Händlern.',
  moreInfoLabel: 'Mehr erfahren',
  moreInfoBody: 'Mehr Infos und häufige Fragen.',

  coverHeadline: 'Unternehmen auf Madeira akzeptieren bereits Bitcoin.',
  coverSub:
    'Hier können Bitcoiner ganz mit Bitcoin leben. Es ist ein anerkanntes Bitcoin-Reiseziel, und Ihr Geschäft ist der nächste Halt.',
  coverFootnote: 'Bitcoin in Ihrem Unternehmen: ein Leitfaden für Händler auf Madeira',

  fastPathHeading: 'In Minuten starten!',
  fastPathSub: 'Unser empfohlener schneller Weg — Swiss Bitcoin Pay',
  fastPathSteps: [
    { n: 1, text: 'App herunterladen.' },
    { n: 2, text: 'Buchhaltungsdaten hinzufügen.' },
    { n: 3, text: 'Dauert etwa 10 Minuten.' },
    { n: 4, text: 'Fertig. Wird wie eine normale Kartenzahlung verarbeitet.' },
  ],

  easyDefaultHeading: 'Bitcoin zu akzeptieren war noch nie so einfach!',
  easyDefaultPoints: [
    'Bitcoin rein, Euro raus, automatisch. Bitcoin behalten Sie nur, wenn Sie es möchten.',
    'Keine buchhalterische Komplexität. Wird wie jeder andere Verkauf behandelt.',
    'Flexibel für Ihr Team: nutzen Sie ein gemeinsames Gerät für alle, oder lassen Sie jeden Mitarbeiter eine Rechnung erstellen.',
    'Sie können den Anteil jederzeit anpassen, wenn Sie einen Teil in Bitcoin behalten möchten.',
  ],

  holdBitcoinHeading: 'Wenn Sie den Bitcoin lieber halten möchten',
  holdBitcoinCallout: [
    'Bitcoin zu halten ist ein großer Schritt, und genau dort wollen wir, dass jeder Händler irgendwann ankommt. Es ist heute komplexer, deshalb starten wir Sie zunächst auf dem einfachen Weg.',
    'Sprechen Sie mit Ihrem Steuerberater über das Halten von Vermögenswerten in Sachwerten. Ein Steuerberater auf Madeira verlangt dafür möglicherweise einen Aufpreis.',
    'Wenn Sie bereit für diesen Schritt sind, führen wir Sie gerne durch den Weg zur Selbstverwahrung (Self-Custody).',
  ],

  lightningVsOnchainHeading: 'Lightning vs. On-Chain',
  lightningVsOnchainBody:
    'Lightning ist schnell und günstig, ideal für alltägliche Zahlungen. Für mehr Sicherheit empfehlen wir Bitcoin on-chain.',
  amountTiers: [
    { range: 'Unter 500 €', advice: 'Bei Lightning bleiben.' },
    { range: '500 €–1.000 €', advice: 'Zu einer On-Chain-Wallet wechseln.' },
    { range: 'Über 1.000 €', advice: 'Wir empfehlen eine Hardware-Wallet.' },
  ],

  otherOptionsHeading: 'Andere echte Optionen',
  walletOptions: [
    {
      name: 'Wallet of Satoshi',
      body: 'Selbstverwahrung, unsere bevorzugte Kombination mit Swiss Bitcoin Pay. Die eigene Kassen-App bedeutet, dass Mitarbeiter niemals Zugriff auf Ihre Gelder haben. Weithin als Referenz-Wallet angesehen.',
    },
    {
      name: 'Blink',
      body: 'Ähnliches Modell mit dedizierter Kassenanbindung, gut für mehrere Mitarbeiter oder Geräte.',
    },
  ],

  paymentTroubleshootingHeading: 'Wenn eine Zahlung nicht ankommt',
  paymentTroubleshooting:
    'Bitten Sie den Kunden, seine Wallet zu prüfen und es erneut zu versuchen. Wenn er Ihnen eine bestätigte Zahlung zeigt, bitten Sie um eine Kopie der Rechnung und senden Sie sie uns. Wir setzen uns direkt mit dem Anbieter in Verbindung.',

  orgFullName: 'FREE Madeira (Fórum Regional para a Educação Económica)',

  sponsorLabel: 'Gesponsert von',

  openingDoorsHeading: 'Bitcoin zu akzeptieren öffnet Türen!',

  viewerNote:
    'FREE Madeira Händler-Flyer. Klicken Sie sich unten durch, um zu sehen, wie ein Händler ihn öffnen würde. Scrollen Sie nach unten für das druckfertige Trifold-Layout — Drucken (Strg/Cmd+P) für echtes A4-Format. Siehe flyer.md im übergeordneten Ordner merchant-guide/ für den Originalinhalt und offene Punkte.',
  brochureOpenLabel: 'Öffnen →',
  brochurePreviousLabel: 'Zurück',
  brochureNextLabel: 'Weiter',
};

export default content;

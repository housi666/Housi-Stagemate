/* Stagemate – Version, Build und Changelog
 * Wird von bump.sh automatisch angepasst (APP_VERSION, APP_BUILD, APP_BUILD_DATE).
 * Versionsregel: kleine Änderung = letzte Zahl +1, grössere Änderung = mittlere Zahl +1,
 * die erste Zahl bestimmt Housi.
 */
const APP_VERSION = 'v0.1.9';
const APP_BUILD = 10;
const APP_BUILD_DATE = '2026-11-16';
const APP_PHASE = 'Pre-Alpha';

// Neueste Version zuerst. Typen: neu | besser | fix | intern
const APP_CHANGELOG = [
  { version: 'v0.1.9', date: '2026-11-16', items: [
    { type: 'besser', text: 'Datenschutz: E-Mail und Telefon getrennt gespeichert, nur für dich und Mitglieder gemeinsamer Bands lesbar' },
    { type: 'besser', text: 'Bestehende Profile werden beim Anmelden automatisch umgestellt' },
    { type: 'besser', text: 'Firestore-Regeln prüfen Format und 5-Minuten-Sperre des Band-Tags' },
  ] },
  { version: 'v0.1.8', date: '2026-11-16', items: [
    { type: 'neu', text: 'Nach dem Anmelden: Übersicht «Deine Bands» mit Logo, Tag und Rollen; ein Klick öffnet die Band' },
    { type: 'besser', text: 'Sichtbarkeitseinstellungen der Band gelten auch in der Übersicht' },
  ] },
  { version: 'v0.1.7', date: '2026-11-16', items: [
    { type: 'neu', text: 'Band-Tag (1–3 Zeichen): bei der Gründung setzen oder generieren, in der Verwaltung änderbar (höchstens alle 5 Minuten)' },
    { type: 'neu', text: 'Sichtbarkeit von Bandlogo, Bandname und Band-Tag einstellbar' },
    { type: 'neu', text: 'Band-Tags erscheinen neben dem Nickname und in der Bandliste' },
    { type: 'neu', text: 'PUID: eine feste ID pro Konto, im Profil per Klick einblendbar' },
    { type: 'neu', text: 'Nickname muss eindeutig sein; gesperrte Wörter (Liste in badwords.js)' },
    { type: 'neu', text: 'E-Mail-Eingabe in drei Feldern: name @ domain . endung' },
    { type: 'neu', text: 'Persönliche Angaben ändern nur mit Passwort (Web-Version)' },
    { type: 'besser', text: 'Regeln für den automatischen Tag in tagrules.js, selbst bearbeitbar' },
  ] },
  { version: 'v0.1.6', date: '2026-11-16', items: [
    { type: 'neu', text: 'Registrierung mit Nickname, Vorname und Nachname' },
    { type: 'neu', text: 'Nutzungsbedingungen und Datenschutzerklärung (müssen akzeptiert werden)' },
    { type: 'neu', text: 'Passwort ansehen: Auge gedrückt halten' },
    { type: 'neu', text: 'Konto: Passwort ändern und Konto löschen (Web-Version)' },
    { type: 'neu', text: 'Housi-Logo unten rechts' },
    { type: 'besser', text: 'Web-Version: kein zweites E-Mail-Feld mehr, die Konto-E-Mail gilt' },
    { type: 'besser', text: 'Angaben aus «Anmelden» werden nicht in «Konto erstellen» übernommen' },
    { type: 'besser', text: 'Firestore-Regeln: Termine und Finanzen nur für Mitglieder der Band' },
    { type: 'besser', text: 'Facebook-Link und Blüemlifigger-Satz entfernt' },
  ] },
  { version: 'v0.1.5', date: '2026-11-16', items: [
    { type: 'neu', text: 'Web-Version mit Firebase: eigenes Stagemate-Konto (E-Mail und Passwort), ohne Claude-Konto nutzbar' },
    { type: 'neu', text: 'Passwort vergessen: Link zum Zurücksetzen per E-Mail' },
    { type: 'intern', text: 'Firestore-Regeln: nur angemeldete Benutzer, Profile nur durch die Person selbst änderbar' },
  ] },
  { version: 'v0.1.4', date: '2026-11-16', items: [
    { type: 'intern', text: 'Eigene Datenschicht: alle Datenzugriffe laufen über eine Stelle (Vorbereitung für Firebase)' },
    { type: 'intern', text: 'Projekt in Dateien aufgeteilt: Oberfläche, Stil, Datenschicht, Version und App-Logik' },
    { type: 'intern', text: 'Build-Nummer, Build-Datum und Changelog eingeführt' },
  ] },
  { version: 'v0.1.3', date: '2026-11-14', items: [
    { type: 'neu', text: 'Beispielumsätze im Register Finanzen' },
  ] },
  { version: 'v0.1.2', date: '2026-11-14', items: [
    { type: 'neu', text: 'Finanzen: optionale Uhrzeit bei Einnahmen und Ausgaben' },
  ] },
  { version: 'v0.1.1', date: '2026-11-14', items: [
    { type: 'neu', text: 'Register Finanzen mit Einnahmen, Ausgaben und CSV-Export' },
  ] },
  { version: 'v0.1.0', date: '2026-11-14', items: [
    { type: 'neu', text: 'Versionsnummer unten links und in Export-Dateinamen' },
    { type: 'neu', text: 'Pre-Alpha-Grundfunktionen: Bands, Rollen und Rechte, Kalender (Tag/Woche/Monat/Jahr), Gigs, Checklisten, Übersicht, Einstellungen, Tipps, Support' },
  ] },
];

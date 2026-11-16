/* Stagemate – Version, Build und Changelog
 * Wird von bump.sh automatisch angepasst (APP_VERSION, APP_BUILD, APP_BUILD_DATE).
 * Versionsregel: kleine Änderung = letzte Zahl +1, grössere Änderung = mittlere Zahl +1,
 * die erste Zahl bestimmt Housi.
 */
const APP_VERSION = 'v0.1.6';
const APP_BUILD = 7;
const APP_BUILD_DATE = '2026-11-16';
const APP_PHASE = 'Pre-Alpha';

// Neueste Version zuerst. Typen: neu | besser | fix | intern
const APP_CHANGELOG = [
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

/*! Stagemate v0.4.25 · Build 47 · 2026-11-17 */
/* Stagemate – Version, Build und Changelog
 * Wird von bump.sh automatisch angepasst (APP_VERSION, APP_BUILD, APP_BUILD_DATE).
 * Versionsregel: kleine Änderung = letzte Zahl +1, grössere Änderung = mittlere Zahl +1,
 * die erste Zahl bestimmt Housi.
 */
const APP_VERSION = 'v0.4.25';
const APP_BUILD = 47;
const APP_BUILD_DATE = '2026-11-17';
const APP_PHASE = 'Alpha';

// Neueste Version zuerst. Typen: neu | besser | fix | intern
const APP_CHANGELOG = [
  { version: 'v0.4.25', date: '2026-11-17', items: [
    { type: 'neu', text: 'Termine und Gigs haben einen Abschnitt „Teilnehmer“ (leer = alle). Wer ausgewählt ist, sieht den Eintrag in „Mein Kalender“ unter „Mir zugeteilt“ (neuer Schalter). „Alle Band-Termine“ zeigt weiterhin alles.' }
  ] },
  { version: 'v0.4.24', date: '2026-11-17', items: [
    { type: 'neu', text: 'Startbildschirm: neue Anzeige „Mein Kalender“ (Monatsansicht) mit eigenen Terminen, deinen zugeteilten Checklisten-Punkten und optional Band-Terminen (Schalter). „+ Termin“ legt persönliche Termine an (nur für dich sichtbar). Braucht die neue Firestore-Regel für private/<uid>/events.' }
  ] },
  { version: 'v0.4.23', date: '2026-11-17', items: [
    { type: 'neu', text: 'Timetable: „Aus Gig kopieren“ übernimmt den Ablauf eines anderen Gigs als Vorlage (ohne Setlist-Verknüpfung, zu den bestehenden Einträgen hinzugefügt).' }
  ] },
  { version: 'v0.4.22', date: '2026-11-17', items: [
    { type: 'neu', text: 'Setlist: „🎤 Bühnenmodus“ – Vollbild mit grosser Schrift, aktuellem Eintrag, Notiz und nächstem Song; Weiterschalten per Tippen, Pfeiltasten/Leertaste oder Wischen; Bildschirm bleibt wach, wo der Browser es erlaubt.' }
  ] },
  { version: 'v0.4.21', date: '2026-11-17', items: [
    { type: 'neu', text: 'Setlist: Knopf „PDF / Drucken“ öffnet eine grosse, gut lesbare Druckansicht (im Druckdialog „Als PDF speichern“). Neu: „JSON importieren“ liest eine exportierte Setlist als neue Setlist ein.' }
  ] },
  { version: 'v0.4.20', date: '2026-11-17', items: [
    { type: 'neu', text: 'Neue Rollen „Setlist“ (Bearbeiten in Setlist und Songs) und „Timetable“ (Bearbeiten in der Timetable), wie die Rolle „Checkliste“. Für neue Bands in der Rollenliste; bestehende Bands fügen sie unter Verwaltung → Rollen hinzu.' }
  ] },
  { version: 'v0.4.19', date: '2026-11-17', items: [
    { type: 'neu', text: 'Gig-Line-up: Ist eine Band der Timetable auch eine deiner Bands in Stagemate (gleicher Name), erscheint daneben „↗ Band öffnen“ und wechselt zu dieser Band.' }
  ] },
  { version: 'v0.4.18', date: '2026-11-17', items: [
    { type: 'neu', text: 'Standard-Genre pro Band: Admin setzt es unter Verwaltung → Band (Vorschlagsliste aus den Songs). Ohne Eintrag zeigt die App das häufigste Genre der Songs als Hinweis. Neue Songs übernehmen das Genre der Band als Vorgabe.' }
  ] },
  { version: 'v0.4.17', date: '2026-11-17', items: [
    { type: 'neu', text: 'Setlist öffentlich/intern wirkt jetzt: Im Gig-Line-up zeigt eine Band mit verknüpfter Setlist „🌐 n Songs“ (öffentlich, Songnamen im Tooltip) oder „🔒 intern“ (Songnamen nur mit Zugriff auf das Register Setlist).' }
  ] },
  { version: 'v0.4.16', date: '2026-11-17', items: [
    { type: 'neu', text: 'Entwicklerseite: Bands zeigen jetzt zusätzlich Songs, Setlists und Timetables (zusammen mit Mitgliedern und Termine).' }
  ] },
  { version: 'v0.4.15', date: '2026-11-17', items: [
    { type: 'neu', text: 'Gig: neuer klappbarer Abschnitt „Line-up“ zeigt alle Bands des Gigs aus der Timetable (eigene Band hervorgehoben); Klick öffnet die Timetable' },
  ] },
  { version: 'v0.4.14', date: '2026-11-17', items: [
    { type: 'neu', text: 'Desktop: Kalender, Gigs, Setlist, Songs, Timetable, Verwaltung und Startbildschirm füllen die ganze Breite; die Kalenderhöhe folgt der Fensterhöhe (passt sich beim Zoomen im Browser an den Bildschirmrand an)' },
  ] },
  { version: 'v0.4.13', date: '2026-11-17', items: [
    { type: 'neu', text: 'Setlist: Knopf „In Timetable des Gigs eintragen“ übernimmt Beginn, Ende, Songzahl und Verknüpfung in die Timetable des zugewiesenen Gigs (aktualisiert bei erneutem Klick); sichtbar im Kalender' },
  ] },
  { version: 'v0.4.12', date: '2026-11-17', items: [
    { type: 'neu', text: 'Status-Auswahl (Online, Privat, Offline) steht auf der Bandseite unter der Uhr oben links; auf dem Startbildschirm, bei eingeklappter Leiste und am Handy bleibt sie oben rechts' },
  ] },
  { version: 'v0.4.11', date: '2026-11-17', items: [
    { type: 'neu', text: 'Nutzungsbedingungen: neuer Abschnitt „Erstellung mit KI“ (App grösstenteils mit Claude erstellt, keine Verantwortung für unbeabsichtigte Rechtsverstösse, soweit gesetzlich zulässig); neue Fassung muss erneut akzeptiert werden' },
    { type: 'neu', text: 'Tipps: oben gut sichtbarer Hinweis „Dieses Tool wurde mit Claude (KI) erstellt“' },
    { type: 'neu', text: 'Anmeldebildschirm: Hinweis, dass das Tool mit Hilfe von KI erstellt wurde' },
    { type: 'neu', text: 'Tipps: gesperrter Knopf „Tutorial“ mit blauem Hinweis oben („Tutorials sind für die Prerelease-Phase (v0.9.0) geplant“)' },
  ] },
  { version: 'v0.4.10', date: '2026-11-17', items: [
    { type: 'neu', text: 'Profil: Bereich „Konto“ (Passwort ändern, Konto löschen) ist wie Persönliche Angaben und Deine Bands auf- und zuklappbar' },
  ] },
  { version: 'v0.4.9', date: '2026-11-17', items: [
    { type: 'neu', text: 'Kalender: Klick auf einen Gig öffnet die Gig-Seite mit aufgeklapptem Gig (kein Termin-Fenster mehr für Gigs)' },
    { type: 'neu', text: 'Termin erstellen: Kategorie „Gig“ nicht mehr wählbar; stattdessen gelber Knopf „Zur Gig-Seite“, danach leuchtet „Gig erstellen“ dreimal' },
    { type: 'neu', text: 'Gig: Verpflegung mit wählbarer Uhrzeit' },
  ] },
  { version: 'v0.4.8', date: '2026-11-17', items: [
    { type: 'neu', text: 'Gigs: Knopf „Zur Setlist“ springt zur verknüpften Setlist; ohne Verknüpfung oben rote Meldung „Noch keine Setlist verknüpft“ und blauer Hinweis' },
    { type: 'neu', text: 'Timetable-Eintrag: Bandname und Startzeit sind Pflicht; optional Ende oder Spieldauer, Anzahl Songs, Setlist-Verknüpfung (Sprung zur Setlist)' },
    { type: 'neu', text: 'Kalender Tagesansicht zeigt Ende, Songs und Setlist der Timetable-Einträge' },
    { type: 'neu', text: 'Import/Export Timetable: CSV-Spalten Uhrzeit;Band;Ende;Dauer;Songs;Notiz, Text „19:00 - 19:45 Bandname“' },
    { type: 'neu', text: 'Testdaten: pro Gig eine Timetable mit allen Bands des Line-ups, verknüpft mit Bands und Setlists; Test-Setlist ist dem ersten Gig der Band zugewiesen' },
  ] },
  { version: 'v0.4.7', date: '2026-11-16', items: [
    { type: 'neu', text: 'Neue Registerkarte Timetable: Ablauf der Band pro Gig (Uhrzeit, Titel, Notiz), Eingabefenster zum Erfassen und Bearbeiten' },
    { type: 'neu', text: 'Import per Textdatei (Zeile 16:00 Soundcheck) oder CSV (Uhrzeit;Titel;Notiz), auch per Einfügen; Export als Text oder CSV' },
    { type: 'neu', text: 'Kalender Tagesansicht: Knopf Timetable blendet die Einträge des Gigs ein oder aus' },
    { type: 'neu', text: 'Gigs: Knopf Timetable öffnet die Timetable des Gigs; Übersicht: neues Fenster mit der Timetable des nächsten Gigs' },
    { type: 'neu', text: 'Rechte für Timetable einstellbar; Firestore-Regeln erweitert (timetables)' },
  ] },
  { version: 'v0.4.6', date: '2026-11-16', items: [
    { type: 'neu', text: 'Neue Songs: in die Bibliothek aufnehmen, als Entwurf speichern (auch unvollständig) oder verwerfen' },
    { type: 'neu', text: 'Entwürfe erscheinen in den Songs, lassen sich aber nicht in eine Setlist übernehmen' },
    { type: 'neu', text: 'Genre wird in einem eigenen Fenster gewählt; vorgeschlagen werden alle Genres, die die Band verwendet' },
    { type: 'neu', text: 'Setlist: Sichtbarkeit Intern oder Öffentlich (Standard Intern; Wirkung folgt später)' },
    { type: 'intern', text: 'Testdaten: 10 Songs und 1 Setlist pro Band ohne Setlist' },
  ] },
  { version: 'v0.4.5', date: '2026-11-16', items: [
    { type: 'neu', text: 'Setlist: Übersicht aller Setlists als Karten, Klick öffnet die Setlist mit ihren Songs' },
    { type: 'neu', text: 'Setlist: Sortierung nach Name, Gig-Datum, Dauer, Anzahl Songs oder zuletzt geändert' },
    { type: 'neu', text: 'Neue Registerkarte „Songs“ (statt Fenster): suchen, sortieren, neu, bearbeiten, löschen; Rechte einstellbar' },
    { type: 'neu', text: 'Songs: Veröffentlichung (Album, EP oder Single) mit Namen als Pflichtfeld, dazu Genre' },
    { type: 'besser', text: 'Doppelwarnung ist ein Knopf: rot mit schwarzer Schrift bei Warnung, grau „KEINE WARNUNG“ nach dem Ausschalten; löst bei neuem doppelten Titel wieder aus' },
    { type: 'besser', text: '„+ aus Bibliothek“ heisst jetzt „Song hinzufügen oder erstellen“; Export-Knöpfe sind gelb' },
  ] },
  { version: 'v0.4.4', date: '2026-11-16', items: [
    { type: 'neu', text: 'Bandverwaltung: Wörter einstellen, die in der Setlist doppelt vorkommen dürfen (hinzufügen, entfernen, Standard wiederherstellen)' },
  ] },
  { version: 'v0.4.3', date: '2026-11-16', items: [
    { type: 'neu', text: 'Setlist: Warnung, wenn derselbe Titel doppelt vorkommt (Intro, Interlude, Break, Outro ausgenommen)' },
    { type: 'neu', text: 'Song-Bibliothek: Löschen und Bearbeiten als Knöpfe; neue Felder Album und Jahr' },
    { type: 'neu', text: 'Band gründen: Hinweis, dass sich auch Solo-Künstler als Band anmelden müssen' },
    { type: 'besser', text: 'Setlist: Zusammenfassung als einzelne Anzeigen, Export-Knöpfe mit Rahmen' },
    { type: 'fix', text: 'Song-Bibliothek schliesst sich beim Bearbeiten eines Songs (keine Überlappung mehr); es werden nur Songs der aktuellen Band gezeigt' },
  ] },
  { version: 'v0.4.2', date: '2026-11-16', items: [
    { type: 'neu', text: 'Setlist: mehrere Setlists pro Band, Songs, Intro, Outro, Zwischenteil, Pause und Ansage, per Griff verschiebbar' },
    { type: 'neu', text: 'Setlist: Gesamtdauer, Uhrzeit pro Element (ab Beginn), Soll-Länge mit Warnung, Gig zuweisen, duplizieren' },
    { type: 'neu', text: 'Setlist: Song-Bibliothek der Band und Export als Text, CSV oder JSON' },
    { type: 'neu', text: 'Startbildschirm: „Setlist erstellen“ funktioniert jetzt' },
  ] },
  { version: 'v0.4.1', date: '2026-11-16', items: [
    { type: 'neu', text: 'Startbildschirm: Anzeigen in 2 Stufen zuklappbar (halb, eine Zeile); Zustand wird gemerkt' },
    { type: 'besser', text: 'Verschieben: Anzeige schwebt, sobald sie am Griff gepackt wird' },
  ] },
  { version: 'v0.4.0', date: '2026-11-16', items: [
    { type: 'neu', text: 'Bandseite → Verwaltung: Mitglieder nach Rang gruppiert (Admins, Organisation, Mitglieder, ohne Rolle)' },
    { type: 'fix', text: 'Bandseite → Übersicht: Griff zum Verschieben wieder sichtbar' },
    { type: 'fix', text: 'Handy: Verwaltung läuft nicht mehr über den Bildschirmrand (Auswahlfelder, Rollen, Kategorien)' },
    { type: 'besser', text: 'Handy-Darstellung auf allen Seiten bei 360 und 390 Pixel Breite geprüft' },
  ] },
  { version: 'v0.3.6', date: '2026-11-16', items: [
    { type: 'neu', text: 'Persönliche Übersicht: Anzeige „Schnell erstellen“ (Gig, Termin, Checkliste; Setlist folgt)' },
    { type: 'neu', text: 'Changelog-Knopf neben Nutzungsbedingungen und Datenschutz: ganzer Changelog, verschachtelt nach Version' },
    { type: 'besser', text: 'Persönliche Übersicht: Anzeigen werden immer nach oben zusammengeschoben' },
    { type: 'besser', text: 'Alle klickbaren Texte sind jetzt Knöpfe (u. a. Alle auf-/zuklappen, CSV exportieren)' },
    { type: 'besser', text: 'Bandseite → Übersicht: Mitgliederliste halbe Breite, höchstens 5 sichtbar, dann scrollen' },
    { type: 'besser', text: 'Entwickler-Knopf etwas grösser und gelb' },
  ] },
  { version: 'v0.3.5', date: '2026-11-16', items: [
    { type: 'neu', text: 'Persönliche Übersicht: neue Anzeige „Dein nächster Gig“ (aus allen Bands, mit Countdown, Ort und Zeitplan)' },
    { type: 'besser', text: 'Alle Anzeigen je ein Drittel breit; Verschieben ist animiert; Umschalter für die Breite und Zähler entfernt' },
    { type: 'besser', text: 'Vorschau (Glühbirne) bei Mauszeiger und Darstellung entfernt' },
    { type: 'besser', text: 'Tipps an den neuen Aufbau angepasst (Übersicht, Status, nächster Gig)' },
  ] },
  { version: 'v0.3.4', date: '2026-11-16', items: [
    { type: 'besser', text: 'Entwickler-Anmeldung: zeigt das verwendete Firebase-Konto und erklärt genau, warum die Anmeldung nicht klappt' },
  ] },
  { version: 'v0.3.3', date: '2026-11-16', items: [
    { type: 'fix', text: 'Entwickler-Anmeldung auf der Anmeldeseite zeigte keine Daten (las den leeren lokalen Speicher statt Firebase)' },
  ] },
  { version: 'v0.3.2', date: '2026-11-16', items: [
    { type: 'neu', text: 'Persönliche Übersicht: einzelne Anzeigen statt Klappmenüs, mit dem Griff ⠿ verschiebbar (neben- und untereinander), Breite mit ⇔ umschaltbar' },
    { type: 'neu', text: 'Eigenen Status oben rechts wählen: Automatisch, Online, Privat oder Offline' },
    { type: 'besser', text: 'Entwickler-Verwaltung: Diagnose-Zeile (was geladen wurde, Fehler) und Hinweis, wenn keine Daten vorhanden sind' },
  ] },
  { version: 'v0.3.1', date: '2026-11-16', items: [
    { type: 'besser', text: 'Persönliche Übersicht ohne Seitenleiste, mit eigener Kopfzeile (Logo, Status, Uhr, Tipps, Support, Abmelden)' },
    { type: 'besser', text: 'Die Bandseite öffnet sich nur noch über die Bandwahl auf der Übersicht' },
    { type: 'besser', text: 'Profil und Einstellungen gibt es nur noch auf der persönlichen Übersicht' },
  ] },
  { version: 'v0.3.0', date: '2026-11-16', items: [
    { type: 'neu', text: 'Nach der Anmeldung immer zuerst der persönliche Startbildschirm, erst dann die Bandseite' },
    { type: 'neu', text: 'Online-Status „Privat“ (blau), solange du auf dem Startbildschirm bist' },
    { type: 'besser', text: 'Unten links „Zurück zum Startbildschirm“ statt „Abmelden“; Abmelden jetzt oben rechts auf dem Startbildschirm' },
    { type: 'neu', text: 'Entwickler-Zugang (Knopf unten rechts): Band- und Benutzerverwaltung mit Einsicht in alle Daten' },
    { type: 'neu', text: 'Handy: Seitenleiste in drei Stufen – offen, nur Symbole, ganz weg (Pfeil am Rand)' },
  ] },
  { version: 'v0.2.1', date: '2026-11-16', items: [
    { type: 'fix', text: 'Registerkarten sind auch auf dem Startbildschirm sichtbar (öffnen die zuletzt geöffnete Band)' },
    { type: 'neu', text: 'Registerkarten in der Seitenleiste auf- und zuklappbar' },
    { type: 'neu', text: 'Startbildschirm: deine nächsten Termine und deine Checklisten-Punkte aus allen Bands' },
    { type: 'neu', text: 'Startbildschirm: Band beitreten, Band gründen, Band suchen' },
  ] },
  { version: 'v0.2.0', date: '2026-11-16', items: [
    { type: 'neu', text: 'Alpha-Phase (Fahrplan: Beta 0.5.0, Prerelease 0.9.0, Release 1.0.0)' },
    { type: 'neu', text: 'Alle Dateien tragen Version, Build und Datum in der ersten Zeile' },
    { type: 'neu', text: 'Register «Setlist» als Baustelle mit blauem Hinweis und Zurück-Knopf' },
    { type: 'neu', text: 'Vor- und Zurück-Knöpfe oben neben dem Seitentitel' },
    { type: 'neu', text: 'Glühbirne mit kleiner Vorschau bei allen optischen Einstellungen' },
    { type: 'neu', text: 'Testdaten-Generator (testdaten.html): 30 Konten, 5 Bands, 7 Gigs mit Checklisten' },
    { type: 'besser', text: 'Seitenleiste: Bandname und Logo zuoberst, darunter Uhr und Datum übereinander, Trennlinie zu den Registern' },
    { type: 'besser', text: 'Datumsformat nur noch tt.mm.jj, mm.tt.jj oder jj.mm.tt' },
    { type: 'besser', text: 'Finanzen: blauer Hinweis «Befindet sich im Bau» oben, Sperrmeldung wie bei anderen Sperren' },
  ] },
  { version: 'v0.1.11', date: '2026-11-16', items: [
    { type: 'neu', text: 'Startbildschirm: Bands, Profil und Einstellungen auf einem Bildschirm, als Klappmenüs' },
    { type: 'neu', text: '«Zurück zum Startbildschirm» unten links; Bandauswahl in der Seitenleiste entfernt' },
    { type: 'neu', text: 'Online-Status: Anzeige «x / y online» unter dem Bandnamen, Mitgliederliste mit Sortierung in der Übersicht' },
    { type: 'neu', text: 'Uhr und Datum oben links (digital oder analog, gemäss Einstellungen)' },
    { type: 'neu', text: 'Einstellungen → Sichtbarkeit: alle persönlichen Sichtbarkeiten an einem Ort, Knopf zur Bandsichtbarkeit' },
    { type: 'neu', text: 'Profil und Einstellungen: Knöpfe zu Sichtbarkeit, Nutzungsbedingungen und Datenschutz' },
    { type: 'besser', text: 'Tipps als Klappmenüs nach Bereichen, ergänzt' },
    { type: 'fix', text: 'Finanzen-Sperre greift für alle; neue Versionen werden sofort geladen (kein alter Zwischenspeicher)' },
  ] },
  { version: 'v0.1.10', date: '2026-11-16', items: [
    { type: 'neu', text: 'Profilbild verbergen: andere sehen es verschwommen mit Schloss, ein Klick zeigt den Hinweis' },
    { type: 'neu', text: 'Verborgenes Bandlogo: verschwommen mit Schloss (nur Admin/Organisation sehen es klar)' },
    { type: 'neu', text: 'Sichtbare Profilbilder und Bandlogos per Klick gross ansehen' },
    { type: 'neu', text: 'Profil & Bands: Bereiche auf- und zuklappen, Alle auf-/zuklappen' },
    { type: 'besser', text: 'Finanzen: Hinweis «Befindet sich im Bau», alle Funktionen gesperrt' },
    { type: 'besser', text: 'Verborgene Profilbilder werden nur im privaten Bereich gespeichert' },
  ] },
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

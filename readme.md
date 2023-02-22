# Lifely Assistant

## [TODO]

Umbauen auf [Immer](https://immerjs.github.io/immer/update-patterns) und [Reducer](https://immerjs.github.io/immer/example-setstate#usereducer--immer) - Beispiel in [Code Sandbox](https://codesandbox.io/s/react-typescript-immer-chatassistant-80rvoc)

## Idee

Dieser Chat Assistent soll dem Benutzer die Kommunikation mit der Swiss Life vereinfachen und ihn schneller zu den gewünschten Inhalten führen.

Um das ganze System flexibel zu halten, wird der Assisten auf Komponenten und Optionen basieren, die frei über Tags orchestriert werden können. So sind keine starren Ablaufbäume erforderlich.

Die Struktur des Chats ist als JSON definiert und kann beliebig weiter orchestriert werden.

## Design

[Figma](https://www.figma.com/file/ZWqSXBIXFZvT5rsMLJU3pc/Assistant)

## Struktur

Dies ist nur ein kleiner Ausschnitt fürs einfachere Verständnis.

```json
	"elements": [
		{
			"id": "entry",
			"title": "Zu welchen Themen kann ich Ihnen behilflich sein?",
			"answer": {
				"text": "Mich interessiert das Thema:",
				"options": ["contract", "account", "contact", "documents", "certificate"]
			}
		},
		{
			"id": "account",
			"title": "Wie kann ich Ihnen bei Ihrem Konto helfen?",
			"answer": {
				"text": "Ich würde gerne in meinem Profil Folgendes ändern:",
				"options": ["phone", "address"]
			}
		},
		{
			"id": "phone",
			"action": "#/addressoverview",
			"title": "Ich habe das Formular zur Adressänderung für Sie geöffnet. Dort können Sie Ihre Adressen anpassen. Kann ich Sie sonst noch unterstützen?",
			"answer": {
				"text": "Danke, ",
				"options": ["entry", "no"]
			}
		},
		{
			"id": "no",
			"title": "Dann wünsche ich Ihnen noch einen schönen Tag und empfehlen Sie uns doch weiter."
		}
	]
```

## Context

Für den Chatablauf ist ein State 'chat' vorhanden, in den die gewählten Elemente injected werden. Aus diesem wird der Chat gerendert. Der State kann bei bestimmten actions dann an den Helpdesk oder den Berater gesandt werden, damit diese direkt über den ganzen Verlauf informiert sind.

## Tools

- [MUI](https://mui.com/material-ui/)
- [Iconify](https://iconify.design/)

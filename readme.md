# Lifely Assistant

## Idee

Dieser Chat Assistent soll dem Benutzer die Kommunikation mit der Swiss Life vereinfachen und ihn schneller zu den gewünschten Inhalten führen.

Um das ganze System flexibel zu halten, wird der Assisten auf Komponenten und Optionen basieren, die frei über Tags orchestriert werden können. So sind keine starren Ablaufbäume erforderlich.

Die Struktur des Chats ist als JSON definiert und kann beliebig weiter orchestriert werden.

## Design

[Figma](https://www.figma.com/file/ZWqSXBIXFZvT5rsMLJU3pc/Assistant)

## Struktur

Dies ist nur ein kleiner Ausschnitt fürs einfachere Verständnis.

```json
{
    elements: [
        {
            id: "entry"
            text: "Zu welchen Themen kann ich Ihnen behilflich sein?"
            options: ["Vertrag", "Konto", "Direktnachricht", "Contracts", "Documents", "certificate"]
        },
        {
            id: "followup"
            text: "Kann ich noch etwas für sie tun?"
            options: ["yes", "No"]
        },
        {
            id: "bye"
            text: "Dann wünsche ich ihnen einen schönen Tag und empfehlen sie mich doch weiter."
        }
    ],
    options: [
        {
            id: "account"
            text: "Mein Profil"
            action: "#/profile"
            followup: "followup"
        },
        {
            id: "yes"
            text: "Ja gerne"
            action: null
            followup: "entry"
        },
        {
            id: "no"
            text: "Nein, alles gut"
            action: null
            followup: "entry"
        }
    ]
}
```

## Context

Für den Chatablauf ist ein Context vorhanden, in den die gewählten Elemente injected werden. Aus diesem Context wird der Chat gerendert. Der Context kann bei bestimmten actions dann an den Helpdesk oder den Berater gesandt werden, damit diese direkt über den ganzen Verlauf informiert sind.

## Tools

- [MUI](https://mui.com/material-ui/)
- [Iconify](https://iconify.design/)

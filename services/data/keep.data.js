import { utilService } from '../util-service'

export const keepData = {
    getNotes
}

function getNotes() { return notes }

const notes = [
    {
        id: utilService.makeId(),
        type: 'video',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { title: 'Full Stack Developer Tutorial', url: "https://www.youtube.com/watch?v=C4jq_yv4OG8" }
    },
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { txt: 'המפתח להצלחה הוא להתחיל עוד לפני שאתה מוכן ' }
    },
    {
        id: utilService.makeId(),
        type: 'list',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: {
            lable: 'Inspired',
            todos: [
                { txt: 'The only impossible journey is the one you never begin', doneAt: (Math.random() > 0.7) ? Date.now() : null },
                { txt: 'See that happens If you don’t give up', doneAt: (Math.random() > 0.7) ? Date.now() : null },
                { txt: 'The secret of getting ahead is getting started', doneAt: (Math.random() > 0.7) ? Date.now() : null },
                { txt: 'Your only limit is your mind', doneAt: (Math.random() > 0.7) ? Date.now() : null }
            ]
        },
    },
    {
        id: utilService.makeId(),
        type: 'img',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { title: 'Salar de Uyuni, Bolivia', url: "data:image/jpeg;base64,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" }
    },
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { txt: 'Dream big, start small, act now' }
    },
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { txt: 'תחלום בגדול, תתחיל בקטן, תפעל עכשיו.' }
    },

    {
        id: utilService.makeId(),
        type: 'list',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: {
            lable: 'משפטים מעוררי השראה',
            todos: [
                { txt: 'המסע הבלתי אפשרי היחיד הוא זה שאתה לא מתחיל', doneAt: (Math.random() > 0.7) ? Date.now() : null },
                { txt: 'תראה מה קורה אם אתה לא מוותר', doneAt: (Math.random() > 0.7) ? Date.now() : null },
                { txt: 'הסוד של ההתקדמות הוא להתחיל', doneAt: (Math.random() > 0.7) ? Date.now() : null }
            ]
        },
    },
    {
        id: utilService.makeId(),
        type: 'text',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { txt: 'The key to success is to start before you are ready' }
    },
    {
        id: utilService.makeId(),
        type: 'img',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { title: 'Dead Sea, Israel', url: "data:image/jpeg;base64,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" }
    },
    {
        id: utilService.makeId(),
        type: 'img',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { title: 'Reflection at sunset', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrADv-zkok91tBCSaQpPn79cBNNmqMKqMWgQ&usqp=CAU" }
    },
    {
        id: utilService.makeId(),
        type: 'sound',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { title: '', url: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg" }
    },

    {
        id: utilService.makeId(),
        type: 'video',
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false,
        info: { title: 'React JS Course 2021', url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" }
    }
]





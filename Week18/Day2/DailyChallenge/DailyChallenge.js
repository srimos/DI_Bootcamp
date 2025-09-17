class Video {
    constructor (title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        alert(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

const video1 = new Video("Lord Of The Rings","Shaun",10000)
video1.watch()
const video2 = new Video("Back To The Future","Jared",5000)

const videoArray = [{
    title: "Lord Of The Rings",
    uploader: "Shaun",
    time: 10000
    },
    {
    title: "Back To The Future",
    uploader: "Jared",
    time: 5400
    },
    {
    title: "Charlie And The Chocolate Factory",
    uploader: "Abigail",
    time: 5000
    },
    {
    title: "Paw Patrol Movie",
    uploader: "Levi",
    time: 4800
    },
    {
    title: "The Smurfs",
    uploader: "Stella",
    time: 4000
    },
]

console.log(videoArray)

const videos = (videoArray) => {
    videoInstances=[]
    console.log("Running...")
    for (let i=0;i<videoArray.length;i++) {
        videoInstances[i] = new Video (videoArray[i].title,videoArray[i].uploader,videoArray[i].time)
        videoInstances[i].watch()
    }
    return videoInstances
}

videos(videoArray)
console.log(videoInstances)


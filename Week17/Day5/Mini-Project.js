const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

function generate_robot_objects(i){
        let newRobot = document.createElement("div")
        newRobot.setAttribute('class','robot')
        newRobot.setAttribute('id',`robot${i+1}`)
        let img = document.createElement("img")
        img.setAttribute("src",`https://robohash.org/${i+1}.png`)
        img.setAttribute('class','img')
        img.setAttribute('id',`img${i+1}`)
        newRobot.appendChild(img)
        let p1 = document.createElement("h3")
        p1.innerHTML = robots[i].name
        newRobot.appendChild(p1)
        let p3 = document.createElement("div")
        p3.innerHTML = robots[i].email
        newRobot.appendChild(p3)
        return newRobot
}

window.onload = function (event){
    let body = document.getElementsByTagName("body")[0]

    let navbar = document.createElement("div")
    navbar.setAttribute('class','navbar')
    navbar.setAttribute('id','navbar')
    body.append(navbar)
    
    let logo = document.createElement("div")
    logo.setAttribute('class','logo')
    logo.setAttribute('id','logo')
    logo.innerHTML = "ROBOFRIENDS"
    navbar.append(logo)

    let navbackground = document.createElement("div")
    navbackground.setAttribute('class','navbackground')
    navbackground.setAttribute('id','navbackground')
    navbar.append(navbackground)

    let myFilter = document.createElement("input")
    myFilter.setAttribute('name','myFilter')
    myFilter.setAttribute('class','myFilter')
    myFilter.setAttribute('id','myFilter')
    myFilter.setAttribute('placeholder','Search Robots')
    navbackground.appendChild(myFilter)

    let robot_container = document.createElement("div")
    robot_container.setAttribute('class','robot_container')
    robot_container.setAttribute('id','robot_container')
    body.appendChild(robot_container)
    for (let i = 0;i<robots.length;i++) {
        let newRobot = generate_robot_objects(i)
        robot_container.appendChild(newRobot)
    }

    myFilter.addEventListener("input",function(event){
        let myFilter = event.target.value
        let robot_container = document.getElementById("robot_container")
        robot_container.innerHTML=""
        for (let i = 0;i<robots.length;i++) {
            if (robots[i].name.toLowerCase().includes(myFilter)){
            let newRobot = generate_robot_objects(i)
            robot_container.appendChild(newRobot)
            }
        }
    })
}
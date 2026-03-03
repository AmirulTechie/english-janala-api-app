const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
        .then(json => displayLessons(json.data))
}
const displayLessons =(lessons)=>{
    // 1.get the container & empty it
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    // 2. get into every lessons
    for(let lesson of lessons){
        // 3. create element
        console.log(lesson);
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
            </button>
        `
        // 4. append container
        levelContainer.append(btnDiv);
        
    }
}
loadLessons()
function highest (students) {
    // your code here...
    var highest = null;
    
    for (var i = 0; i < students.length; i += 1){
      var student = students[i];
      var score = student.score;
      var name = student.name;
    
      if(highest === null || student.score > highest){
        highest = student.score;
      }
    }
    return highest;
  }
  
  
  function highestScore (students){
    var topscore = highest(students);
    
    for (var i = 0; i < students.length; i += 1){
      var student = students[i];
      var names = student.name.split(" ");
      var initials = names[0][0] + names[1][0];
      var idinitials = initials + student.id;
      
      if (student.score === topscore){
        return idinitials;
      }
    }
  }

  
console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
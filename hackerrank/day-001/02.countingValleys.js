//Problem : Counting Valleys

function countingValleys(steps, path) {
  // Write your code here
  let key = false,counter = 0,
    answer = 0;
  for (let i = 0; i < steps; i++) {
    if(path[i] == 'D')counter--;
    else counter++;

    if(counter < 0) key = true;

    if(key && counter == 0){
        answer++;
        key = false;
    }
  }

  return answer;
}

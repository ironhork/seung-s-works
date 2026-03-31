const wordEl = document.getElementById('word');
const definitionEl = document.getElementById('definition');
const nextWordButton = document.getElementById('next-word-button');

const vocabulary = {
    // People/Family
    person: { en: 'Person', ko: '사람' },
    man: { en: 'Man', ko: '남자' },
    woman: { en: 'Woman', ko: '여자' },
    child: { en: 'Child', ko: '아이' },
    family: { en: 'Family', ko: '가족' },

    // Animals
    dog: { en: 'Dog', ko: '개' },
    cat: { en: 'Cat', ko: '고양이' },
    fish: { en: 'Fish', ko: '물고기' },
    bird: { en: 'Bird', ko: '새' },
    horse: { en: 'Horse', ko: '말' },

    // Food
    food: { en: 'Food', ko: '음식' },
    water: { en: 'Water', ko: '물' },
    bread: { en: 'Bread', ko: '빵' },
    fruit: { en: 'Fruit', ko: '과일' },
    vegetable: { en: 'Vegetable', ko: '채소' },

    // Objects
    table: { en: 'Table', ko: '탁자' },
    chair: { en: 'Chair', ko: '의자' },
    car: { en: 'Car', ko: '자동차' },
    computer: { en: 'Computer', ko: '컴퓨터' },
    phone: { en: 'Phone', ko: '전화기' },

    // Places
    school: { en: 'School', ko: '학교' },
    home: { en: 'Home', ko: '집' },
    city: { en: 'City', ko: '도시' },
    country: { en: 'Country', ko: '나라' },
    world: { en: 'World', ko: '세계' },

    // Time
    time: { en: 'Time', ko: '시간' },
    year: { en: 'Year', ko: '년' },
    month: { en: 'Month', ko: '월' },
    day: { en: 'Day', ko: '일' },
    hour: { en: 'Hour', ko: '시간' },

    // Nature
    sun: { en: 'Sun', ko: '해' },
    moon: { en: 'Moon', ko: '달' },
    star: { en: 'Star', ko: '별' },
    tree: { en: 'Tree', ko: '나무' },
    flower: { en: 'Flower', ko: '꽃' },

    // Verbs
    be: { en: 'To be', ko: '이다/있다' },
    have: { en: 'To have', ko: '가지다' },
    do: { en: 'To do', ko: '하다' },
    say: { en: 'To say', ko: '말하다' },
    go: { en: 'To go', ko: '가다' },

    // Adjectives
    good: { en: 'Good', ko: '좋은' },
    new: { en: 'New', ko: '새로운' },
    old: { en: 'Old', ko: '오래된' },
    big: { en: 'Big', ko: '큰' },
    small: { en: 'Small', ko: '작은' },

    // Numbers
    one: { en: 'One', ko: '하나' },
    two: { en: 'Two', ko: '둘' },
    three: { en: 'Three', ko: '셋' },
    four: { en: 'Four', ko: '넷' },
    five: { en: 'Five', ko: '다섯' },

    // Colors
    red: { en: 'Red', ko: '빨강' },
    green: { en: 'Green', ko: '초록' },
    blue: { en: 'Blue', ko: '파랑' },
    yellow: { en: 'Yellow', ko: '노랑' },
    black: { en: 'Black', ko: '검정' },

    // More Nouns
    love: { en: 'Love', ko: '사랑' },
    friend: { en: 'Friend', ko: '친구' },
    work: { en: 'Work', ko: '일' },
    life: { en: 'Life', ko: '삶' },
    money: { en: 'Money', ko: '돈' },
    hand: { en: 'Hand', ko: '손' },
    eye: { en: 'Eye', ko: '눈' },
    head: { en: 'Head', ko: '머리' },
    way: { en: 'Way', ko: '길' },
    thing: { en: 'Thing', ko: '것' },

    // More Verbs
    see: { en: 'To see', ko: '보다' },
    come: { en: 'To come', ko: '오다' },
    want: { en: 'To want', ko: '원하다' },
    look: { en: 'To look', ko: '보다' },
    use: { en: 'To use', ko: '사용하다' },
    find: { en: 'To find', ko: '찾다' },
    give: { en: 'To give', ko: '주다' },
    tell: { en: 'To tell', ko: '말하다' },
    work_verb: { en: 'To work', ko: '일하다' },
    call: { en: 'To call', ko: '부르다' },

    // More Adjectives
    happy: { en: 'Happy', ko: '행복한' },
    sad: { en: 'Sad', ko: '슬픈' },
    beautiful: { en: 'Beautiful', ko: '아름다운' },
    ugly: { en: 'Ugly', ko: '못생긴' },
    delicious: { en: 'Delicious', ko: '맛있는' },
    hot: { en: 'Hot', ko: '더운' },
    cold: { en: 'Cold', ko: '추운' },
    easy: { en: 'Easy', ko: '쉬운' },
    difficult: { en: 'Difficult', ko: '어려운' },
    important: { en: 'Important', ko: '중요한' },
};

const words = Object.keys(vocabulary);
let currentWordIndex = 0;

function showWord() {
    const wordKey = words[currentWordIndex];
    wordEl.textContent = vocabulary[wordKey].en;
    definitionEl.textContent = vocabulary[wordKey].ko;
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    showWord();
}

nextWordButton.addEventListener('click', nextWord);

// Show the first word initially
showWord();
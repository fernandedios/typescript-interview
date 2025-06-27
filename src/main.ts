//console.log("Typescript");

/* 
// interface
interface Person {
  name: string;
  age: number;
}

interface Person {
  gender?: string; // declaration merging
}

interface Employee extends Person {
  role: string;
}

//type

type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive" | "banned";

type LoadingState = {
  state: "loading";
};

type FailedState = {
  state: "failed";
  code: number;
};

type SuccessState = {
  state: "success";
  response: {
    title: string;
  };
};

type NetworkState = LoadingState | FailedState | SuccessState;

// type narrowing examples
const foo = (state: NetworkState): string => {
  switch (state.state) {
    case "loading":
      return state.state;
    case "failed":
      return `Error is ${state.code}`;
    case "success":
      return state.response.title;
    default:
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
  }
};

// handling html dom
const someElement = document.querySelector(".foo") as HTMLInputElement | null;
if (someElement) {
  console.log(someElement.value);

  someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  });
} 
*/

/* 
// classes
interface UserInterface {
  getFullName(): string;
}
class User implements UserInterface {
  private firstName: string;
  private lastName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  private editor: string | undefined;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string | undefined {
    return this.editor;
  }
}

const user = new User("John", "Doe");
console.log(User.maxAge);

const admin = new Admin("Jane", "Doe");
admin.setEditor("vim");
console.log(admin.getFullName()); 
*/

/* 
// Enums
// enum StatusEnum {
//     notStarted, // 0
//     inProgress, // 1
//     done // 2
// }

enum StatusEnum {
  notStarted = "notStarted",
  inProgress = "inProgress",
  done = "done",
}

let stat: StatusEnum = StatusEnum.notStarted;
console.log(stat); // 'notStarted'

interface TaskInterface {
  id: number;
  status: StatusEnum;
}

const task: TaskInterface = {
  id: 1,
  status: StatusEnum.inProgress,
};
 */

/* 
// generics
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface User<T> {
  name: string;
  data: T;
}

const user: User<{ meta: string }> = {
  name: "John",
  data: {
    meta: "some metadata",
  },
};

const user2: User<{ response: object }> = {
  name: "Jane",
  data: {
    response: { title: "Hello World" },
  },
};

//const result = addId<{ name: string}>(user);
const result = addId<User<{ meta: string }>>(user);
console.log(result);
 */

/* 
// arrays and tuples
//const names: (string | number)[] = ["John", "Jane", 42, "Doe"]; // array
//const names: [string, string, string] = ["John", "Jane", "Doe"]; // tuple

const failedResponse: [string, number] = ["Error occurred", 404];
const primaryColots: [string, string, string] = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
];
 */

// optional operator and elvis operator
/* interface UserInterface {
  firstName?: string;
  lastName: string;
}

const user: UserInterface = {
  lastName: "Sparrow",
};

console.log(user.firstName?.toUpperCase());

const getLastName = (user?: UserInterface): string | undefined => {
  return user?.lastName;
};

console.log(getLastName(user)); // "Sparrow" 
*/

/* 
// keyof operator
interface UserInterface {
  id: number;
  name: string;
  age: number;
}

const users: UserInterface[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Doe", age: 40 },
];

const columns: Array<keyof UserInterface> = ["id", "name", "age"];

const result = users.map((user) => {
  return columns.map((column) => {
    return user[column];
  });
});

console.log(result); 
 */

/* // index signature
interface UserInterface {
  id: number;
  name: string;
  age: number;
}

interface NamesInterface {
  [key: string]: string; // index signature
}

const names: NamesInterface = {
  foo: "foo",
  bar: "bar",
};
 */

/* 
// record helper
// interface Names {
//   [key: string]: string; // index signature
// }

type Names = Record<string, string>; // Record helper type

const names: Names = {
  foo: "foo",
  bar: "bar",
};

type NumericRecord = Record<string, number>;

const salary: NumericRecord = {
  annual: 50000,
  bonus: 60000,
};
 */

/* // omit and pick
interface User {
  id: number;
  name: string;
  age: number;
}

type Profile = Omit<User, "age" | "name">; // Omit 'age' and 'name'
type Staff = Pick<User, "id" | "name">; // Pick 'id' and 'name'
 */

/* 
// readonly
interface User {
  id: number;
  name: string;
  age: number;
}

type ROUser = Readonly<User>; // makes all properties readonly

const user: ROUser = {
  id: 1,
  name: "John",
  age: 30,
}; 
*/

/* 
// partial
interface User {
  id: number;
  name: string;
  age: number;
}

const updateUser = (user: User, fields: Partial<User>) => {
  return {
    ...user,
    ...fields,
  };
};

const user: User = {
  id: 1,
  name: "John",
  age: 30,
};

const updatedUser = updateUser(user, { name: "Jane" });
console.log(updatedUser); // { id: 1, name: 'Jane', age: 30 } 
*/

/* 
// required
interface User {
  id?: number;
  name?: string;
  age?: number;
}

const user: Required<User> = {
  id: 1,
  name: "John",
  age: 30,
};
 */

// react
import {useState, createContext, useContext} from 'react';

interface ButtonProps {
  text?: string;
  icon: string;
}

interface User {
  id: number;
  name: string;
}

const Button = ({ text = "Submit", icon }: ButtonProps): JSX.Element => {
  return (
    <button>
      {text} {icon && <span>{icon}</span>}
      {children && children}
    </button>
  );
};

const AppContext = createContext({ theme: "light" });

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const appContext = useContext(AppContext);

  setUser({ id: 1, name: "John Doe" });

  return (
    <div>
      <h1>Hello, TypeScript!</h1>
      <Button icon="👍">
        <span>Cildren</span>
      </Button>
      {user && user.name}
      {appContext.theme}
    </div>
  );
};

export default App;


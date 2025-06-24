console.log("Typescript");

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

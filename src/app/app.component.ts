import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define and export the category class
export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

// Initialize the categories array
const CATEGORIES: Category[] = [
  { "id": 1, "slug": "html", "name": "HTML" },
  { "id": 2, "slug": "css", "name": "CSS" },
  { "id": 3, "slug": "javascript", "name": "Javascript" },
  { "id": 4, "slug": "c#", "name": "C#" }
];

// Define and export the tag class
export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

// Initialize the tags array
const TAGS: Tag[] = [
  {"id":1,"name":"Gaming","slug":"gaming"},
  {"id":2,"name":"Tips","slug":"tips"},
  {"id":3,"name":"Flexbox","slug":"flexbox"},
  {"id":4,"name":"Visual Studio","slug":"visual-studio"},
  {"id":5,"name":".NET","slug":"net"},
  {"id":6,"name":"VS Code","slug":"vs-code"},
];

// Define and export the project class
export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}

// Initialize the projects array
const PROJECTS: Project[] = [
  {
    "id": 1,
    "title": "Number Mystery",
    "slug": "number-mystery",
    "excerpt": " Get ready to embark on a mind-bending journey that will challenge your wits and ignite your curiosity. We are thrilled to unveil our latest creation, a game that will unravel the secrets hidden within the realm of numbers.",
    "body": "<p>Ea error fugit cumque non exercitationem non. Molestias et deserunt ad suscipit quis. Rerum voluptatem saepe aperiam assumenda.</p></p>Saepe tenetur nihil quia quidem nemo. Sequi similique iure ullam facilis. Molestias occaecati veritatis provident.</p></p>Adipisci expedita distinctio libero ea. Nulla quam minus beatae voluptate laudantium quis eos. Fugit ullam ut perferendis quia dignissimos. Blanditiis iste et voluptas magni. Voluptate eos qui quaerat iure eius est aut.</p></p>Quisquam est voluptatum aut cupiditate molestias. Explicabo consequuntur nostrum et et non neque. Consequatur sed est sed blanditiis voluptatem nihil.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "javascript", "name": "Javascript" },
    "tags": [
      {
        "id": 1,
        "name": "Gaming",
        "slug": "gaming",
        "pivot": { "projects_id": 1, "tags_id": 1 }
      },
    ]
  },
  {
    "id": 2,
    "title": "Haku's Hunt!",
    "slug": "hakus-hunt",
    "excerpt": "'Haku's Hunt' offers a fresh take on the Snake game genre, combining nostalgic gameplay with a captivating story and visually stunning graphics. Prepare to embark on a thrilling journey through a mystical realm, where cunning and courage are your greatest assets. Can you help Haku uncover the secrets of this enchanting world and become the ultimate serpent adventurer? The hunt begins now.",
    "body": "<p>Velit perspiciatis tenetur aspernatur cum qui facilis. Quos tempora omnis harum corporis. Cumque quisquam ea cumque aut sed eius. Ut mollitia architecto eaque tempora ab sit alias.</p></p>Recusandae id non sunt voluptatem. Aut et ab et nihil. At unde recusandae ea molestias dignissimos quisquam molestias.</p></p>Dolore qui recusandae non. Non omnis vel similique ullam odit maiores. Libero in consequatur quia dolores. Unde aliquam hic mollitia.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "javascript", "name": "Javascript" },
    "tags": [
      {
        "id": 1,
        "name": "Gaming",
        "slug": "gaming",
        "pivot": { "projects_id": 1, "tags_id": 1 }
      },
    ]
  },
  {
    "id": 3,
    "title": 'THE WIZARDING WORLD IS CAPTIVATED BY THE MAGICAL GAME "WORDLE"',
    "slug": "wordle",
    "excerpt": 'The Wizarding World is buzzing with excitement as a new magical game called "Wordle" has taken Hogwarts by storm. Students and professors alike are captivated by this enchanting word-guessing challenge. With spells and potions, players must unravel the hidden words and unlock the mysteries within. The game has quickly become a favorite pastime, with students gathering in the common rooms to compete and showcase their magical prowess.',
    "body": "<p>Numquam voluptates quod doloremque sed. Odio ea in totam veritatis consequuntur ad cupiditate. Adipisci et qui dolor architecto dicta asperiores a. Consequuntur est impedit explicabo ut iste aperiam error deleniti.</p></p>Consequatur sint quia error exercitationem iusto doloremque non placeat. Ut ea molestiae aut. Ab et dolorum ab sit omnis sit. Consequatur ipsam culpa repellat voluptas.</p></p>Facere rem eum doloribus deleniti repellat. Ut quia amet incidunt. Eos et culpa reiciendis ipsum et molestiae omnis. Cumque reprehenderit delectus eum alias consequatur quibusdam.</p></p>Quod minus aut est quis omnis magnam. Tempora ad ab quia sed est optio distinctio. Ut vel et dolor sint est iure.</p></p>Suscipit dolores omnis quia nihil. Deleniti totam rerum cupiditate. Odio maiores consequatur fuga perspiciatis. Commodi doloremque exercitationem neque eius. Nulla cumque et doloribus ab consectetur voluptatem explicabo.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "javascript", "name": "Javascript" },
    "tags": [
      {
        "id": 1,
        "name": "Gaming",
        "slug": "gaming",
        "pivot": { "projects_id": 1, "tags_id": 1 }
      },
    ]
  },
  {
    "id": 4,
    "title": "Hi-Low World Releasing 2024",
    "slug": "hi-low-world",
    "excerpt": 'Introducing "Hi-Low World" - Unveiling Late 2024! Get ready to embark on an epic gaming journey like never before! In late 2024, the gaming world is about to witness a revolutionary masterpiece that will redefine your gaming experience. "Hi-Low World" is coming, and it\'s set to take the gaming universe by storm.',
    "body": "<p>Ut facere cumque hic corrupti animi. Dolore sequi fugit sed quisquam ratione repellat eaque. Eos autem perspiciatis ipsum voluptas voluptas.</p></p>Cum illum iste quia et minima ipsam non. Quas nobis et laborum nihil animi. Quia corrupti et saepe est consectetur ducimus dolores.</p></p>Voluptas rerum sed voluptates ea aliquid. Laboriosam in quisquam tempore sed saepe totam.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "javascript", "name": "Javascript" },
    "tags": [
      {
        "id": 1,
        "name": "Gaming",
        "slug": "gaming",
        "pivot": { "projects_id": 1, "tags_id": 1 }
      },
    ]
  },
  {
    "id": 5,
    "title": "Breakpoints in Visual Studio",
    "slug": "breakpoints-in-visual-studio",
    "excerpt": "Visual Studio's debugging tools, like breakpoints and step-over/step-into, offer precise control for efficient issue identification and resolution.",
    "body": "<p>Sit quae laborum sunt dolorum voluptatem et ipsam. Et ipsum animi exercitationem est omnis.</p></p>Autem autem est non voluptatibus. A neque veniam voluptas quo vitae adipisci odio. Vitae quo ea atque molestiae dolorem in.</p></p>Similique adipisci eum qui voluptate repudiandae tempore corporis. At iste earum totam minima dignissimos odio sed animi. Rerum exercitationem est est expedita quae. Mollitia minima ut necessitatibus est dolores rem. Ducimus sit consequatur eos quia omnis.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 4,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 4, "slug": "c#", "name": "C#" },
    "tags": [
      {
        "id": 1,
        "name": "Tips",
        "slug": "tips",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      },
      {
        "id": 2,
        "name": "Visual Studio",
        "slug": "visual-studio",
        "pivot": { "projects_id": 1, "tags_id": 4 }
      },
      {
        "id": 3,
        "name": ".NET",
        "slug": "net",
        "pivot": { "projects_id": 1, "tags_id": 5 }
      }
    ]
  },
  {
    "id": 6,
    "title": "Boosting Productivity: Mastering Efficiency with Ctrl+D in Visual Studio Code",
    "slug": "boosting-productivity-mastering-efficiency-with-ctrl-d-in-visual-studio-code",
    "excerpt": "Discover a time-saving shortcut in Visual Studio Code: use Ctrl+D to select the next occurrence of the current word. Press Ctrl+D multiple times to select subsequent occurrences. This can help you quickly make changes to multiple instances of the same name and improve your coding efficiency.",
    "body": "<p>Ut consequatur modi voluptates officia inventore consequatur. Molestiae possimus voluptate nihil voluptatem et harum sapiente. Aut voluptas possimus aspernatur beatae omnis ad et. Non non ipsum laborum quisquam et.</p></p>Ullam ab velit at non. Deserunt ut ea veritatis sapiente aliquid eos quia et. Commodi dolore esse voluptatem delectus.</p></p>Velit velit numquam cupiditate quis. Quos et veniam nobis omnis.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 1, "slug": "html", "name": "HTML" },
    "tags": [
      {
        "id": 1,
        "name": "Tips",
        "slug": "tips",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      },
      {
        "id": 2,
        "name": "VS Code",
        "slug": "vs-code",
        "pivot": { "projects_id": 1, "tags_id": 6 }
      },
    ]
  },
  {
    "id": 7,
    "title": "Simplify Centering with Flexbox: Achieve Perfection with Ease!",
    "slug": "simplify-centering-with-flexbox-achieve-perfection-with-ease",
    "excerpt": "When it comes to centering elements in your web design, look no further than the power duo: justify-content: center and align-items: center. These two flexbox properties effortlessly transform your layout, eliminating the need for complex positioning.",
    "body": "<p>Est et quia ipsam odio voluptatem fuga ducimus. Non illo vitae sed commodi ut. Tempora commodi tenetur velit incidunt ullam.</p></p>Id cum saepe asperiores voluptas quidem quos. Ipsum facilis illum voluptate asperiores.</p></p>Mollitia reprehenderit autem molestias. Sed quia officia velit non sunt. Esse delectus consequatur minus laboriosam laudantium alias. Qui commodi est assumenda accusamus.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 2, "slug": "css", "name": "CSS" },
    "tags": [
      {
        "id": 1,
        "name": "Tips",
        "slug": "tips",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      },
      {
        "id": 2,
        "name": "VS Code",
        "slug": "vs-code",
        "pivot": { "projects_id": 1, "tags_id": 6 }
      },
      {
        "id": 3,
        "name": "Flexbox",
        "slug": "flexbox",
        "pivot": { "projects_id": 1, "tags_id": 3 }
      }
    ]
  },
  {
    "id": 8,
    "title": "Enhancing Code Clarity through Comment Integration",
    "slug": "enhancing-code-clarity-through-comment-integration",
    "excerpt": "Elevate code readability effortlessly by employing the keyboard shortcut Ctrl + / to seamlessly insert informative comments.",
    "body": "<p>Deleniti rerum labore sint quibusdam. Expedita ea reiciendis molestiae et amet repellendus autem voluptates. Aut qui voluptas ullam suscipit necessitatibus libero veritatis.</p></p>Pariatur voluptatum quia at quod. Quod quisquam qui commodi. Autem quae sequi minus iste.</p></p>Id atque magnam dolorem minus omnis aut accusantium. Et maxime blanditiis asperiores itaque sit qui culpa est. Consequatur esse excepturi suscipit ea et est corporis. Iure earum dolorum pariatur id.</p></p>Quia dicta quis libero eos odio expedita. In blanditiis doloribus natus ullam expedita est. Sed voluptatibus rerum distinctio voluptate assumenda vel cum.</p></p>Provident ut ipsam minus eos. Quaerat est tempore architecto sint. Vitae deserunt ullam corrupti asperiores sit quia facilis.</p></p>Quia minus ut qui cum odio error dolor quia. Rerum minus molestias voluptatum et eius consequatur. Autem quis et molestiae quidem provident voluptas fuga vel. Voluptatibus quas accusantium doloremque dolores deleniti eum.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-23T22:31:23.000000Z",
    "updated_at": "2023-02-23T22:31:23.000000Z",
    "category": { "id": 3, "slug": "javascript", "name": "Javascript" },
    "tags": [
      {
        "id": 1,
        "name": "Tips",
        "slug": "tips",
        "pivot": { "projects_id": 1, "tags_id": 2 }
      },
      {
        "id": 2,
        "name": "VS Code",
        "slug": "vs-code",
        "pivot": { "projects_id": 1, "tags_id": 6 }
      },
    ]
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-A01';
  date: number | undefined;
  author: string [] = [];
  public categories = CATEGORIES;
  public tags = TAGS;
  public projects = PROJECTS;
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  constructor() {
    const currentDate = new Date();
    this.date = currentDate.getFullYear();
    this.author = ["Nigel", " Kai"];
  }

  setCategoryFilter(category: Category) {
    this.projects = PROJECTS.filter((project) => project.category?.id === category.id);
    this.categoryFilter = category;
    this.tagFilter = undefined;

  }

  setTagFilter(tag: Tag) {
    this.projects = PROJECTS.filter((project) =>
    project.tags?.some((projectTag) => projectTag.id === tag.id)
  );
    this.tagFilter = tag;
    this.categoryFilter = undefined;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
    this.projects = PROJECTS;
  }

}

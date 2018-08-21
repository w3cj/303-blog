# 303 Blog

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

* Update `.env.test` with your test db connection info
* Update scripts/test.sh with your test db name

```
npm run test
```

## Development

* Copy `.env.sample` to `.env`, update with your db connection information

```
npm run migrate
npm run seed
npm run dev
```

## Package Audit with snyk

```
npm run audit
```

---

<a name="top"></a>
# 303-blog v1.0.0

Documentation for 303-blog

- [Posts](#posts)
	- [Create a post](#create-a-post)
	- [Get one post by ID](#get-one-post-by-id)
	- [Get all posts](#get-all-posts)
	- [Update a post](#update-a-post)
	


# <a name='posts'></a> Posts

## <a name='create-a-post'></a> Create a post
[Back to top](#top)



	POST /posts





### Body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  title | String | <p>The title of the post.</p>_Size range: 1..200_<br>|
|  author | String | <p>The author of the post.</p>_Size range: 1..50_<br>|
|  content | String | <p>The content of the post.</p>|

### Param Examples

(json)
Request JSON:

```
{
  "title": "All Systems Go: Choosing the Right CMS for Your Business",
  "author": "Angelina Lim",
  "content": "As your business grows, your web presence needs to become more complex. Putting your best digital foot forward requires working with the right Content Management System (CMS). Whether your technical and design skill levels are top-notch or non-existent, there’s a CMS out there for you. Here’s an overview to lead you to the right one."
}
```

### Success Response

Response JSON:

```
{
  "id": 7,
  "title": "All Systems Go: Choosing the Right CMS for Your Business",
  "author": "Angelina Lim",
  "content": "As your business grows, your web presence needs to become more complex. Putting your best digital foot forward requires working with the right Content Management System (CMS). Whether your technical and design skill levels are top-notch or non-existent, there’s a CMS out there for you. Here’s an overview to lead you to the right one."
}
```


### Error Response

Error-Response:

```
{
  "message": "title: is a required property, author: is a required property, content: is a required property"
}
```
## <a name='get-one-post-by-id'></a> Get one post by ID
[Back to top](#top)



	GET /posts/:id




### Param Examples

(string)
Request URL

```
https://303-blog.now.sh/api/v1/posts/7
```

### Success Response

Response JSON:

```
{
  "id": 7,
  "title": "All Systems Go: Choosing the Right CMS for Your Business",
  "author": "Angelina Lim",
  "content": "As your business grows, your web presence needs to become more complex. Putting your best digital foot forward requires working with the right Content Management System (CMS). Whether your technical and design skill levels are top-notch or non-existent, there’s a CMS out there for you. Here’s an overview to lead you to the right one."
}
```


### Error Response

Error-Response:

```
HTTP/1.1 404 Not Found
{
  "message": "Post not found"
}
```
## <a name='get-all-posts'></a> Get all posts
[Back to top](#top)



	GET /posts





### Success Response

Response JSON:

```
[
  {
      "id": 1,
      "title": "Using the Testing Maturity Model to improve Quality Assurance Process",
      "author": "Sajitha Ramachandra Menon",
      "content": "The Testing Maturity Model is a great framework for improving an organization’s testing and Quality Assurance process to make sure that projects are delivered on time and within the client’s budget.\n\n  Being that reliability and providing high-quality deliverables are key values of 303 Software, we put the Testing Maturity Model to use for adopting the best practices for our testing process.\n  \n  The Testing Maturity Model, developed by the Illinois Institute of Technology, follows a staged architecture for creating models that improve the testing process. The key focus in creating this staged architecture is to evolve an organization’s testing process from being unmanaged and ad hoc to one that is managed, defined, measured, and optimizable."
  },
  {
      "id": 2,
      "title": "iOS Development - Using FastLane to Cut Through App Store Traffic.",
      "author": "Chris Chares",
      "content": "Building an app is great. Publishing an app is not.\n\n  Building an app is great. Publishing an app is not. Despite all the great apps available on the App Store, it’s often difficult to publish an app on the store due to Apple’s extremely specific requirements. This creates quite a few protracted hours spent putting all of the requirements together so we can actually publish the app we’ve spent the last few months working on.\n  \n  For the Android market, publishing is simple. So simple that if we built an Android app and wanted to give it to somebody, it would be as easy as sending the file to them in an email and them opening it up on their device.\n  \n  With Apple, however, the process is much more stringent. Because all iOS apps are only distributed through Apple’s proprietary App Store, there is a specific approval process that each app has to go through in order for users to start downloading it. The process includes adding metadata to the app (everything from the primary language of the app to the SKU), creating a beta build of the app for review, uploading screenshots of the app on different devices, and answering a bazillion questions about compliance, content, and platform version. Even after gathering all of these different pieces together and submitting it for review, we then usually have to cross our fingers and see what Apple says, and there’s no guarantee that they’ll approve it (although we’ve learned many a trick over the years to help ensure a quicker path to approval)."
  },
  {
      "id": 3,
      "title": "How to Build a Great Pair-Programming Room",
      "author": "Chase Foster",
      "content": "Pair-programming is a great tool for programming teams to utilize, but it’s rare that anyone has a handy guide for what makes a great pair-programming room.\n\n  We’ve come up with a list of some of the ways we optimize our pair-programming rooms, which hopefully you can use in your own pair-programming setup.\n  \n  For those unfamiliar with pair-programming, it is essentially a way for more than one developer to tackle some kind of code problem together. This can be as small as figuring out how to get a specific function to return a specific value, or as large as mapping out an entire application’s architecture. Programmers benefit from being able to verbally describe a piece of code to another developer, which helps them work through the problem as well as get feedback from the other developer. \n  \n  Below is one of our pair-programming rooms, with some of the custom tools we use to maximize productivity."
  },
  {
      "id": 4,
      "title": "Blades of Grass: Thoughts on Leadership and Japanese Kaizen",
      "author": "Derek Taniguchi",
      "content": "Based on the Japanese Kaizen, continuous improvement is about making sure that we are all improving every aspect of our company together.\n\n  The key to any company’s success is that everyone within the organization heads in the same direction together. A company can most effectively improve as a unit if the Project Managers share the same direction as the Software Developers, the Sales staff, as well as the company Founders. We constantly work for this unity of a shared vision at 303 Software.\n  \n  One of our core values at 303 Software is that we improve continuously. Based on the Japanese business philosophy of Kaizen, continuous improvement is about making sure that we are all improving every aspect of our company together. It sounds obvious, but it’s not always that easy to establish. There are constant challenges with this approach and with everything we do that we must always consider. This is not only defined by how we manage projects and software, but also seemingly simple details like the kinds of wires we use to power our machines."
  },
  {
      "id": 5,
      "title": "Why Your Friendly Neighborhood Dev Shops Thrive in a Product-Driven World",
      "author": "Nick DeCesare",
      "content": "Any business would — and should — tell you they’re customer-driven. \n  But with the ever-growing presence of product-driven web services, how do you know when it’s time to use a pre-fab app versus working with a team of developers to build the site of your dreams? The bottom line: A product-driven option will get you what you need, but a dev shop can really dig into what you want. Here’s why.\n   \n  Building From the Bottom Up\n  \n  Let’s say you’re in the market for a house. Your options are wide open, so you’re not sure where to begin. (I know this is Denver, but bear with me here.)\n  \n  You know your basic needs: four walls, a roof, and, hey, some doors and windows would be nice. For the sake of ease, you buy a new home in a subdivision. The house is fine: it’s totally functional, moving in was a snap, and you even got to pick the paint colors.\n  \n  Now let’s say you’ve got a clear vision of what your house could look like. You want lots of customizations: massive kitchen, an indoor slide, a ball pit — whatever you can dream up. It sounds like you’re aiming for a Chuck E. Cheese™, by the way, but I’m not here to judge.\n  \n  To achieve your exact vision, you have to work one-on-one with a builder. That way, you get the features, quality, and overall results you’re looking for. That level of control and customization is what you get with a dev shop."
  },
  {
      "id": 6,
      "title": "Thoughts on Flutter: Another Cross-Platform Solution for Mobile Apps.",
      "author": "Sean Kladek",
      "content": "tl;dr: Flutter offers another cross-platform solution for mobile apps. It is only intended for the UI layer and makes use of native controls with a centralized API so you can write once and use actual native controls on both platforms as opposed to an HTML/CSS solution (more like React Native than PhoneGap).\n\n  The biggest risk with this solution is that it is still in beta and is very new. There will be many bugs to work out — and I'm not holding my breath that this one will be any different from its predecessors. Read on to see why.\n  \n   \n  Pros:\n  \n      Simplified reload. Stateful Hot Reload allows for making code changes and reloading the app without having to go through the compilation process. Compiling usually takes around 10-20 seconds each time depending on app size and some other factors.\n  \n      Uses native UI objects. This is in place of a webview with HTML/CSS. Using native UI objects allows views to be constructed with native views already familiar to the user. They’re also maintained by each platform, meaning less upkeep for your team.\n  \n      Multiple IDE integrations. Flutter integrates with existing IDEs including Xcode, Android Studio, IntelliJ, and AppCode, allowing your developers to use tools they already know.\n  \n      Created by Google. It will likely receive frequent and high-quality updates.\n  \n      Geared for rapid development. These are claims at the moment, but other cross-platform solutions claim the same and it rarely pans out. The final optimizations and bug fixes on those solutions tend to take much longer than just building native.\n  "
  }
]
```


## <a name='update-a-post'></a> Update a post
[Back to top](#top)



	POST /posts/:id





### Body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  title | String | <p>The title of the post.</p>_Size range: 1..200_<br>|
|  author | String | <p>The author of the post.</p>_Size range: 1..50_<br>|
|  content | String | <p>The content of the post.</p>|

### Param Examples

(string)
Request URL

```
https://303-blog.now.sh/api/v1/posts/7
```
(json)
Request JSON:

```
{
  "title": "Hire me",
  "author": "CJ",
  "content": "Hire me please..."
}
```

### Success Response

Response JSON:

```
{
  "id": 7,
  "title": "Hire me",
  "author": "CJ",
  "content": "Hire me please..."
}
```


### Error Response

Error-Response:

```
{
  "message": "title: is a required property, author: is a required property, content: is a required property"
}
```
Error-Response:

```
HTTP/1.1 404 Not Found
{
  "message": "Post not found"
}
```

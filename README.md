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


## <a name='get-one-post-by-id'></a> Get one post by ID
[Back to top](#top)



	GET /posts/:id




### Param Examples

(string)
Request URL

```
https://303-blog.now.sh/api/v1/events/7
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

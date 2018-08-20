<a name="top"></a>
# 303-blog v1.0.0

Documentation for 303-blog

- [Posts](#posts)
	- [Create a post](#create-a-post)
	


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



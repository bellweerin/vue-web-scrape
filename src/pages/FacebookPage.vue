<template>


<div class="container">
    <h1>Create page </h1>

    <form>
  <div class="form-row">
    <div class="col-6">
      <input type="text" class="form-control" placeholder="Page Name">
    </div>     
  </div>
   <button type="submit" class="btn btn-primary">Create</button>
   <button type="reset" value="Reset" class="btn btn-warning">Clear</button>
</form>

<br>
<h1>All Page name Table </h1>
<table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button class="btn btn-danger">Delete</button><button class="btn btn-warning">edit</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button class="btn btn-danger">Delete</button><button class="btn btn-warning">edit</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><button class="btn btn-danger">Delete</button><button class="btn btn-warning">edit</button></td>
    </tr>
  </tbody>
</table>









</div>
</template>
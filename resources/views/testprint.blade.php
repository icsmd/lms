<!DOCTYPE html>
<html>

<head>
  <title>My Printable Page</title>
  <style>
    @media print {
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        /* Adjust as needed */
        background-color: #eee;
        padding: 10px;
        margin-bottom: 40px;
      }

      .table-container {
        /* margin-top: 10% !important; */
        /* Initial margin for first page */
      }

      .table-container:after {
        content: "";
        display: block;
        height: 0;
        /* Adjusted for spacing */
        /* margin-top: 10% !important; */
        /* Space for subsequent pages */
        /* page-break-before: always; */
      }

      table {
        /* margin-top: 50px !important; */
        width: 100%;
        /* border-collapse: collapse; */
      }

      thead:after {
        display: table-header-group;
        /* margin-top: 10% !important; */
      }

      /* Add this rule to adjust spacing for headers on subsequent pages */
      tbody:after {
        margin-top: 10% !important;
      }
    }
  </style>
</head>

<body>
  <div class="header">
    <h1>This is the fixed header</h1>
  </div>
  <div class="table-container">
    <table>
      <thead>
      <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td> 
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <?php for ($i = 0; $i < 100; $i++): ?>
        <tr>
          <td>Data 1 - Row
            <?php echo $i + 1; ?>
          </td>
          <td>Data 2 - Row
            <?php echo $i + 1; ?>
          </td>
          <td>Data 3 - Row
            <?php echo $i + 1; ?>
          </td>
        </tr>
        <?php endfor; ?>
      </tbody>
      <tfoot>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tfoot>
    </table>
  </div>
</body>

</html>
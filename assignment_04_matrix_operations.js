// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function printMatrix(m)
{
    for (let i = 0; i < m.length; i++)
    {
        console.log(m[i].join(" "));
    }
}

function transpose(m)
{
    let t = [];

    for (let i = 0; i < m[0].length; i++)
    {
        t[i] = [];

        for (let j = 0; j < m.length; j++)
        {
            t[i][j] = m[j][i];
        }
    }

    return t;
}

function addMatrix(a, b)
{
    let sum = [];

    for (let i = 0; i < a.length; i++)
    {
        sum[i] = [];

        for (let j = 0; j < a[0].length; j++)
        {
            sum[i][j] = a[i][j] + b[i][j];
        }
    }

    return sum;
}

function multiply(a, b)
{
    let result = [];

    for (let i = 0; i < a.length; i++)
    {
        result[i] = [];

        for (let j = 0; j < b[0].length; j++)
        {
            result[i][j] = 0;

            for (let k = 0; k < b.length; k++)
            {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

function getMatrix(rows, cols)
{
    let m = [];

    for (let i = 0; i < rows; i++)
    {
        let row = readlineSync.question("Enter row " + (i + 1) + ": ");
        m.push(row.split(" ").map(Number));
    }

    return m;
}

function main()
{
    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let a = getMatrix(rows, cols);

    console.log("\nOriginal Matrix:");
    printMatrix(a);

    console.log("\nTransposed Matrix:");
    printMatrix(transpose(a));

    let b = getMatrix(rows, cols);

    console.log("\nAdded Matrix:");
    printMatrix(addMatrix(a, b));

    let r2 = readlineSync.questionInt("\nEnter rows of Matrix B for multiplication: ");
    let c2 = readlineSync.questionInt("Enter columns of Matrix B for multiplication: ");

    let b2 = getMatrix(r2, c2);

    console.log("\nMultiplied Matrix:");
    printMatrix(multiply(a, b2));
}

main();
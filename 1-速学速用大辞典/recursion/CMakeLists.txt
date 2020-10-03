cmake_minimum_required(VERSION 3.12)
project(recursion C)

set(CMAKE_C_STANDARD 99)

add_executable(fibonacci fibonacci.c)
add_executable(hanoi hanoi.c)
add_executable(step step.c)
add_executable(queen queen.c)
add_executable(main main.c)
add_executable(integer_factorization integer_factorization.c)
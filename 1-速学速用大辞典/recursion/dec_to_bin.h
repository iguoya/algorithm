//
// Created by tiger on 18-12-6.
//

#include <stdio.h>

#ifndef RECURSION_DEC_TO_BIN_H
#define RECURSION_DEC_TO_BIN_H

void dec_to_bin(int n) {
    if(n == 0) {
        printf("\n算出二进制结果:\n");
    } else {
        dec_to_bin(n/2);
        printf("%d", n%2);
    }
}
#endif //RECURSION_DEC_TO_BIN_H

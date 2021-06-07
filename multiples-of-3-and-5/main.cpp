#include <iostream>
#include <vector>

int main() {
    const int n = 1000;

    int total = 0;

    for (int i = 0; i < n; ++i) {
        if (i % 3 == 0 || i % 5 == 0) {
            total += i;
        }
    }

    std::cout << total;
}

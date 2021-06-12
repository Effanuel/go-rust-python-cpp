#include <fstream>
#include <iostream>
#include <sstream>
#include <string>

int main() {
    std::ifstream file("./data.txt");

    long double total = 0;

    if (file.is_open()) {
        std::string line;

        while (std::getline(file, line)) {
            std::stringstream iss(line);
            long double number;
            while (iss >> number) {
                total += number;
            }
        }
        std::cout << std::to_string(total).substr(0, 10);
    }
}
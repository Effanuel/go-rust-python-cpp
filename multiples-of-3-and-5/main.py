def main():
    n = 1000
    print(sum([i for i in range(1, n) if i % 3 == 0 or i % 5 == 0]))

if __name__ == '__main__':
    main()
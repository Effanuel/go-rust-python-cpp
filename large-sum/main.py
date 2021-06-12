def main():
    with open('./data.txt', 'r') as file:
        print(str(sum(list(map(int, file.readlines()))))[:10])

if __name__ == '__main__':
    main()
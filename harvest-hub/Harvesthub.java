import java.io.*;
import java.util.Scanner;

public class Harvesthub {
    private static final String[] VALID_PASSWORDS = {"ABCDE", "XYZ15", "33972"};
    private static final String INVENTORY_FILE = "Inventory.txt";
    private static final String CUSTOMER_FILE = "CustomerRecords.txt";
    private static final String SUPPLY_FILE = "SupplyTracking.txt";
    private static final String PROFIT_FILE = "ProfitRecords.txt";

    private Scanner scanner;

    public Harvesthub() {
        scanner = new Scanner(System.in);
        initializeFiles();
    }

    private void initializeFiles() {
        createFileIfNotExists(INVENTORY_FILE,
                "VEGETABLE NAME     | PRICE($)/kg  | QUANTITY\n" +
                        "1) Tomato         | 3            | 500\n" +
                        "2) Cucumber       | 2            | 500\n" +
                        "3) Broccoli       | 7            | 600\n" +
                        "4) Onion          | 2            | 700\n" +
                        "5) Garlic         | 1            | 800");

        createFileIfNotExists(CUSTOMER_FILE,
                "CUSTOMER NAME      | AGE  | CONTACT NUMBER\n" +
                        "1) Alice Johnson  | 30   | 555-1234\n" +
                        "2) Bob Smith      | 45   | 555-5678\n" +
                        "3) Charlie Brown  | 25   | 555-9012\n" +
                        "4) Daisy Miller   | 35   | 555-3456\n" +
                        "5) Ethan Harper   | 40   | 555-7890");

        createFileIfNotExists(SUPPLY_FILE,
                "PRODUCT NAME      | SUPPLIER NAME   | QUANTITY SUPPLIED\n" +
                        "1) Apples        | GreenOrchards   | 500 kg\n" +
                        "2) Potatoes      | FarmFresh       | 1000 kg\n" +
                        "3) Carrots       | RootHarvest     | 700 kg\n" +
                        "4) Lettuce       | LeafyGreens     | 400 kg\n" +
                        "5) Strawberries  | BerryFields     | 300 kg");

        createFileIfNotExists(PROFIT_FILE,
                "PROFIT AMOUNT     | Revenue   | PHONE NUMBER");
    }

    private void createFileIfNotExists(String filename, String content) {
        File file = new File(filename);
        if (!file.exists()) {
            try (PrintWriter writer = new PrintWriter(file)) {
                writer.println(content);
            } catch (FileNotFoundException e) {
                System.out.println("Error creating " + filename);
            }
        }
    }

    public void run() {
        authenticateUser();
        mainMenu();
        scanner.close();
    }

    private void authenticateUser() {
        boolean authenticated = false;

        System.out.println("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Welcome to Harvest Hub Managing System!!!*");
        System.out.println("\t\t\t\t\t\t\t\t\t\t\t\t         Organizing your market from seed to sale");

        while (!authenticated) {
            System.out.print("\n\nEnter the 5-digit password to proceed: ");
            String input = scanner.nextLine();

            for (String password : VALID_PASSWORDS) {
                if (input.equals(password)) {
                    authenticated = true;
                    break;
                }
            }

            if (!authenticated) {
                System.out.println("Incorrect password. Please try again.");
            }
        }

        System.out.println("\nPassword accepted! Access granted.");
    }

    private void mainMenu() {
        int choice;

        do {
            System.out.println("\n\nSelect To PROCEED!!");
            System.out.println("1) PRODUCT INVENTORY");
            System.out.println("2) CUSTOMER RECORDS");
            System.out.println("3) SUPPLY TRACKING (Delivery information)");
            System.out.println("4) PROFIT CALCULATOR");
            System.out.println("5) Exit");
            System.out.print("Enter your choice (1-5): ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> inventoryMenu();
                case 2 -> customerMenu();
                case 3 -> supplyMenu();
                case 4 -> profitMenu();
                case 5 -> System.out.println("Exiting the program. Thank you!");
                default -> System.out.println("Invalid Selection! Please select a valid option.");
            }
        } while (choice != 5);
    }

    private void inventoryMenu() {
        int choice;
        do {
            System.out.println("\n\n\t\t*Welcome to the INVENTORY!*");
            System.out.println("1) ADD products");
            System.out.println("2) REMOVE products");
            System.out.println("3) UPDATE product information");
            System.out.println("4) VIEW inventory");
            System.out.println("5) Go Back to Main Menu");
            System.out.print("Enter your choice (1-5): ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 4 -> displayFile(INVENTORY_FILE);
                case 1, 2, 3 -> System.out.println("You selected option " + choice + " in INVENTORY.");
                case 5 -> System.out.println("Returning to main menu...");
                default -> System.out.println("Invalid selection.");
            }
        } while (choice != 5);
    }

    private void customerMenu() {
        int choice;
        do {
            System.out.println("\n\n\t\t*Welcome to Customer Records!*");
            System.out.println("1) ADD new customer information");
            System.out.println("2) REMOVE customer information");
            System.out.println("3) UPDATE customer information");
            System.out.println("4) VIEW saved customer information");
            System.out.println("5) Go Back to Main Menu");
            System.out.print("Enter your choice (1-5): ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 4 -> displayFile(CUSTOMER_FILE);
                case 1, 2, 3 -> System.out.println("You selected option " + choice + " in Customer Records.");
                case 5 -> System.out.println("Returning to main menu...");
                default -> System.out.println("Invalid selection.");
            }
        } while (choice != 5);
    }

    private void supplyMenu() {
        int choice;
        do {
            System.out.println("\n\n\t\t*Welcome to SUPPLY TRACKING!*");
            System.out.println("1) ADD new supply information");
            System.out.println("2) REMOVE supply information");
            System.out.println("3) UPDATE supply information");
            System.out.println("4) VIEW supply information");
            System.out.println("5) Go Back to Main Menu");
            System.out.print("Enter your choice (1-5): ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 4 -> displayFile(SUPPLY_FILE);
                case 1, 2, 3 -> System.out.println("You selected option " + choice + " in Supply Tracking.");
                case 5 -> System.out.println("Returning to main menu...");
                default -> System.out.println("Invalid selection.");
            }
        } while (choice != 5);
    }

    private void profitMenu() {
        int choice;
        do {
            System.out.println("\n\n\t\t*Welcome to PROFIT CALCULATOR!*");
            System.out.println("1) Calculate profit");
            System.out.println("2) View profit records");
            System.out.println("3) Go Back to Main Menu");
            System.out.print("Enter your choice (1-3): ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> calculateProfit();
                case 2 -> displayFile(PROFIT_FILE);
                case 3 -> System.out.println("Returning to main menu...");
                default -> System.out.println("Invalid selection.");
            }
        } while (choice != 3);
    }

    private void calculateProfit() {
        System.out.println("\n\nProfit Calculation!!");
        System.out.println("\nTO calculate revenue!");

        System.out.print("\nEnter combined PRICE of items sold: ");
        int price = scanner.nextInt();

        System.out.print("\nEnter total product Quantity sold: ");
        int units = scanner.nextInt();

        int revenue = price * units;
        System.out.println("\nTotal Revenue = " + revenue);

        System.out.print("\nEnter Total Expenses of the month: ");
        int expenses = scanner.nextInt();
        System.out.println("\nTotal Expense = " + expenses);

        int profit = revenue - expenses;
        System.out.println("\nProfit = " + profit + "$\n");

        if (profit > 0) {
            System.out.println("You had a profit gain of " + profit + "$\n");
        } else {
            System.out.println("You had a loss of " + (-profit) + "$\n");
        }

        try (PrintWriter writer = new PrintWriter(new FileWriter(PROFIT_FILE, true))) {
            writer.printf("%-20d%-15d%-15s%n", profit, revenue, "12345");
        } catch (IOException e) {
            System.out.println("Error saving profit record.");
        }

        System.out.print("\nWould you like to view the profit records? (1 for Yes, 2 for No): ");
        if (scanner.nextInt() == 1) {
            displayFile(PROFIT_FILE);
        }
        scanner6.nextLine();
    }

    private void displayFile(String filename) {
        System.out.println("\n--- Contents of " + filename + " ---");
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading " + filename);
        }
    }

    public static void main(String[] args) {
        new Harvesthub().run();
    }
}

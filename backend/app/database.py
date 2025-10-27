from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# ✅ MySQL connection URL (with correct username and password)
SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://smrutismaranika:smruti70080@localhost/project_db"

# ✅ Create the engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# ✅ Session configuration
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ✅ Base class for models
Base = declarative_base()


# Dependency for FastAPI endpoints
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Optional: quick test helper (run `python database.py` to test)
if __name__ == "__main__":
    try:
        with engine.connect() as conn:
            print("✅ Successfully connected to the database.")
    except Exception as e:
        print("❌ Database connection failed:")
        print(e)

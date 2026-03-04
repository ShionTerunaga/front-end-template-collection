import os
def resolve_repo_root():
    return os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))


def node_path():
    return os.environ.get("NODE", "node")